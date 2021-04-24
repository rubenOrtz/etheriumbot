const discord = require('discord.js')
const db = require('megadb')
const coin = new db.crearDB('vipcoin')
const staff = new db.crearDB('staff')
const profile = new db.crearDB('profile')
module.exports = {
    nombre: 'addcoins',
    alias: [],
    desc: "Agrega coins premium a un usuario",
    run: async(client, message, args) => {
        let canal = client.channels.cache.get("781254398352293898")
        let mention = message.mentions.members.first() || message.guild.members.resolve(args[0])
        if(!profile.has(`${mention.id}`)){
            return message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Developer")
                .setColor("RED")
                .setDescription("El usuario no posee un perfil, dile que se cree uno!")
            )
        }

        if(!staff.tiene(message.author.id)){
            return message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Developer")
                .setColor("RED")
                .setDescription("¡No tienes permitido utilizar este comando!")
            )
        }
        if(!mention){
            return message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Developer")
                .setColor("RED")
                .setDescription("Debés mencionar o colocar la id de un usuario")
            )
        }

        if(!args[1]){
            return message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Developer")
                .setColor("RED")
                .setDescription("Debés colocar una cantidad de coins!")
            )
        }

        if(isNaN(args[1])) return message.channel.send(
            new discord.MessageEmbed()
            .setTitle("Etherium Developer")
            .setColor("RED")
            .setDescription("Solo se pueden colocar números!")
        )


        if(!isNaN(args[1])){
            coin.sumar(`${mention.id}.coins`, args[1])
            message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Developer")
                .setColor("GREEN")
                .setDescription(`Fueron añadidos ${args[1]} al usuario ${mention}`)
            )

            canal.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Developer")
                .setColor("GREEN")
                .setDescription(`El staff ${message.author} \n añadió ${args[1]} Coins al usuario ${mention}`)
            )
        }
    }
}