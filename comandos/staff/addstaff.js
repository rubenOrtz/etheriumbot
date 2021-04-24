const discord = require('discord.js')
const db = require('megadb')
const staff = new db.crearDB('staff')
const profile = new db.crearDB('profile')
const developers = new db.crearDB('developers')
module.exports = {
    nombre: 'addstaff',
    alias: [],
    desc: "Añade a un usuario a la lista de Staff",
    run: async(client, message, args) => {

        user = message.mentions.members.first() || message.guild.members.resolve(args[0])

        if(!developers.tiene(`${message.author.id}`)){
            return message.channel.send(
                new discord.MessageEmbed()
                .setAuthor(message.author.tag)
                .setDescription("`No` tienes permisos para utilizar este comando!")
                .setTimestamp()
            )
        }

        if(staff.tiene(`${user.id}`)){
            return message.channel.send(
                new discord.MessageEmbed()
                .setDescription("Este usuario ya está en la lista!")
                .setTimestamp()
            )
        }

        if(!user){
            return message.channel.send(
                new discord.MessageEmbed()
                .setDescription(`Debes colocar la ID del usuario!`)
            )
        }

        staff.establecer(user.id, user.user.tag);
        message.channel.send(
            new discord.MessageEmbed()
            .setTitle("Staff | Etherium Security")
            .setDescription(`El usuario `+ args.join(" ") + ` fue añadido a la lista de Staff!`)
            .setTimestamp()
        )
    } 
}