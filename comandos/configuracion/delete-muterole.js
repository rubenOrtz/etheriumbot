const discord = require('discord.js')
const db = require('megadb')
const role_db = new db.crearDB('server_rolemute')
module.exports = {
    nombre: 'delete-muterole',
    alias: [],
    desc: "Borrarás el rol de mute",
    run: async(client, message, args) => {
        let permisos = message.member.hasPermission("ADMINISTRATOR")
        let role = message.mentions.roles.first() || message.guild.roles.resolve(args[0]);

        const perms = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(message.author.tag)
        .setDescription("`No` tienes permisos para utilizar este comando!")
        .setTimestamp()
        .setFooter("Etherium Security")

        if(!permisos){
            message.channel.send(perms)
        }

        if(!role_db.has(`${message.guild.id}`)){
            message.channel.send(
                new discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(message.author.tag)
                .setDescription("¡No tienes el rol de mute seteado!")
                .setTimestamp()
                .setFooter("Etherium Security")
            )
        }

        role_db.eliminar(`${message.guild.id}`)
        message.channel.send(
            new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(message.author.tag)
            .setDescription("Rol eliminado de mi base!")
            .setTimestamp()
            .setFooter("Etherium Security")
        )

    }
}