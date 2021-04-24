const discord = require('discord.js')
const db = require('megadb')
const developers = new db.crearDB('developers')
const staff = new db.crearDB('staff')
const profile = new db.crearDB('profile')
module.exports = {
    nombre: 'removestaff',
    alias: [],
    desc: "Quita el rango staff a un usuario",
    run: async(client, message, args) => {

        user = message.mentions.members.first() || message.guild.members.resolve(args[0])

        if(!developers.tiene(`${message.author.id}`)){
            return message.channel.send(
                new discord.MessageEmbed()
                .setAuthor("Etherium Security | Staff ")
                .setDescription("`No` tienes permisos para utilizar este comando!")
                .setTimestamp()
            )
        }

        if(!staff.tiene(user.id)){
            return message.channel.send(
                new discord.MessageEmbed()
                .setDescription("El usuario que intentas quitar de la lista, no se encuentra en la misma")
                .setTimestamp()
                .setAuthor("Etherium Security | Staff ")
            )
        }

        if(!user){
            return message.channel.send(
                new discord.MessageEmbed()
                .setDescription(`Debes colocar la ID del usuario!`)
            )
        }

        staff.eliminar(user.id)
        profile.establecer(`${user.id}.role`, "Usuario")
        return message.channel.send(
            new discord.MessageEmbed()
            .setDescription("El usuario <@" + user + "> fue eliminado del equipo de staff")
            .setAuthor("Etherium Security | Staff ")
            .setTimestamp()
        )
    }
}