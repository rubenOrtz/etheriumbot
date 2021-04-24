const { MessageEmbed } = require('discord.js')
const db = require('quick.db');
const { PREFIX } = require('../../config.json');


module.exports = {
    nombre: 'sv',
    alias: ["setverification"],
    desc: "Setear la verificacion!",
    run: async(client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Necesitas permiso de administrador para poder ejecutar este comando!**");

        if (!args[0]) return message.channel.send("**Introduzca un nombre de canal para el que se le pedirá al usuario que verifique.**");

        if (!args[1]) return message.channel.send("**Ingrese un rol que se agregará una vez que se verifique al usuario.**");

        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args[0].toLocaleLowerCase());
        if (!channel || channel.type !== 'text') return message.channel.send("**Ingresa un canal válido!**");

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args[1].toLocaleLowerCase());
        if (!role) return message.channel.send("**Introduzca un rol válido!**");

        let verifiedchannel = channel;

        try {
            let a = await db.fetch(`verificationchannel_${message.guild.id}`);
            let b = await db.fetch(`verificationrole_${message.guild.id}`);

            if (channel.id === a && role.id === b) {
                return message.channel.send('**Este canal ya está definido como canal de verificación.!**');
            } else if (channel.id === a && role.id === b) {
                return message.channel.send("**Este rol ya está definido como rol de verificación!**");
            }
            else {
                message.guild.channels.cache.forEach(channel => {
                    if (channel.type === 'category' && channel.id === verifiedchannel.id) return;
                    let r = channel.permissionOverwrites.get(role.id);
                    if (!r) return;
                    if (r.deny.has("VIEW_CHANNEL") || r.deny.has("SEND_MESSAGES")) return;

                    channel.createOverwrite(message.guild.id, {
                        VIEW_CHANNEL: false
                    });

                    channel.updateOverwrite(role, {
                        VIEW_CHANNEL: true,
                        SEND_MESSAGES: true
                    });
                });

                verifiedchannel.updateOverwrite(role, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                });

            const sembed2 = new MessageEmbed()
                .setAuthor("Sistema de verificacion añadido correctamente!")
                .setColor("GREEN")
                .setDescription(`**Bienvenidos a ${message.guild.name}!\n Para verificarte coloca - \`${prefix}verify\`**`)
                .setDescription(`**Bienvenido al servidor \`${message.guild.name}\` !**\nPara confirmar que es un humano y no un robot, escriba \`${prefix}verify\`\nEsto le dará acceso a todo el servidor.\nTe deseamos un buen momento en nuestro servidor de discord.`)
                .setFooter("Etherium Security | Verify" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                message.channel.send(sembed2)
            
                db.set(`verificationchannel_${message.guild.id}`, channel.id);
                db.set(`verificationrole_${message.guild.id}`, role.id);

                return message.channel.send(`**El canal de verificación y la función se han definido con éxito en \`${channel.name}\`!**`);
            };
        } catch(e) {
            console.log(e)
            return message.channel.send("*Error: `¡Permisos faltantes o el canal no es un canal de texto!`**");
        };
    }
};