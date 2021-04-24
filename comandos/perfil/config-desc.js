const discord = require('discord.js')
const db = require('megadb')
const profile = new db.crearDB('profile')
const prefix_db = new db.crearDB('prefix')
module.exports = {
    nombre: 'config-desc',
    alias: [],
    desc: "Configura la descripción de tu perfil!",
    run: async (client, message, args) => {
        const user = message.member;
        const desc = profile.obtener(`${user.id}.desc`);

        const texto = args.join(" ");

        const AntiLinks = new discord.MessageEmbed()
        .setTitle("Etherium Security | Perfil")
        .setDescription("¡No puedes colocar Invites en el perfil!")
        .setFooter("Etherium Security")
        .setTimestamp()

        var links = [
            "discord.gg",
            "discord.me",
            "discord.io",
            "discordapp.com/invite",
            "https://discord.gg/"
        ]

        if (links.some(word => message.content.toLowerCase().includes(word))) {
            await message.delete();
            return message.channel.send(AntiLinks)
        }

        const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
        if (!profile.tiene(`${user.id}`)) {
            return message.channel.send(
                new discord.MessageEmbed()
                .setThumbnail(user.user.displayAvatarURL({
                    dynamic: true
                }))
                .setTitle("Etherium Security | Perfil")
                .setDescription("Debés crearte un perfil antes de configurarlo!\n\n" + "`" + `${prefix}crear-perfil` + "`")
                .setColor("RED")
                .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            )
        }

        if (!texto) {
            return message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Security | Perfil")
                .setColor("RED")
                .setThumbnail(user.user.displayAvatarURL({
                    dynamic: true
                }))
                .setDescription("Debés colocar algo para tu descripción!")
                .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
                .setTimestamp()
            )
        }

        profile.establecer(`${user.id}.desc`, texto)

        const descripción = new discord.MessageEmbed()
            .setTitle("Etherium Security | Perfil")
            .setColor("BLACK")
            .setThumbnail(user.user.displayAvatarURL({
                dynamic: true
            }))
            .setDescription("Ahora tu descripción es la siguiente \n" + texto)
            .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            .setTimestamp()
        message.channel.send({
            embed: descripción
        })

    }
}