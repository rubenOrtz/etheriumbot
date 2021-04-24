const discord = require('discord.js')
module.exports = {
    nombre: 'usuario',
    alias: ["miembro","info"],
    desc: "Podrás ver los datos de la persona que desees",
    run: (client, message, args) => {
        let estados = {
            "online" : "Conectado",
            "offline" : "Desconectado",
            "idle" : "Ocupado",
            "dnd": "No molestar"
        }

        let usuario = message.mentions.members.first() || message.member;   
        let msgEmbed = new discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription(`información del usuario: `+"`"+`${usuario.user.username}`+"`")
        .setThumbnail(usuario.user.displayAvatarURL())
        .addField(`Nombre completo`,"`"+`${usuario.user.tag}`+"`")
        .addField(`ID`,"`"+`${usuario.id}`+"`")
        .addField(`Estado`, "`"+`${estados[usuario.presence.status]}`+"`")
        .addField('Roles del usuario ', `${usuario.roles.cache.map(m => m).join(" **|** ")}`)
        .addField('Cuenta creada ', '``' +`${usuario.user.createdAt.toDateString()}` + "``", true)
        .addField('Fecha de Ingreso','``' + message.member.joinedAt.toDateString() + "``")
        .setFooter('Etherium Security | User', 'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        return message.channel.send({embed: msgEmbed})
    }
}