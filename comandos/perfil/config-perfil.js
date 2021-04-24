const discord = require('discord.js')
const db = require('megadb')
const profile = new db.crearDB('profile')
const prefix_db = new db.crearDB('prefix')
module.exports = {
    nombre: 'config-perfil',
    alias: ["Config-profile"],
    desc: "Desplegará los comandos para configurar tu perfil!",
    run: async (client, message, args) => {
        const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
        let user = message.member;
        message.delete()

        if (!profile.tiene(`${user.id}`)) {
            const EmbedNo = new discord.MessageEmbed()
                .setThumbnail(user.user.displayAvatarURL())
                .setTitle("Etherium Security | Perfil")
                .setDescription("Debés crearte un perfil antes de configurarlo!\n\n" + "`" + `${prefix}crear-perfil` + "`")
                .setColor("RED")
                .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            message.channel.send({
                embed: EmbedNo
            })
        }

        if (profile.tiene(`${user.id}`)) {
            const EmbedSi = new discord.MessageEmbed()
                .setThumbnail(user.user.displayAvatarURL())
                .setTitle("Etherium Security | Perfil")
                .setDescription("¡Bienvenido a la configuración de tu cuenta! \n\n`config-desc` > Podrás configurar tu descripción! \n`config-titulo` > Podrás configurar tu título! \n`Config-sex` > Selecciona el sexo con el que te defines\n`config-edad` > Coloca la edad que posees! \n `config-color` > Podrás configurar el color que mas te guste!")
                .setColor("GREEN")
                .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            message.channel.send({
                embed: EmbedSi
            })
        }
    }
}