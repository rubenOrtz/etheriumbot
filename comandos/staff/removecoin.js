const discord = require('discord.js')
const db = require('megadb')
let profile = new db.crearDB('profile')
let coin = new db.crearDB('vipcoin')
let staff = new db.crearDB('staff')
module.exports = {
    nombre: 'removecoins',
    alias: [],
    desc: "Quita coins premiums",
    run: async(client, message, args) => {
        let user = message.member;
        let mention = message.mentions.members.first() || message.guild.members.resolve(args[0])

        if(!profile.has(`${mention.user.id}`)){
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
        let canal = client.channels.cache.get("781254398352293898")
        if(!isNaN(args[1])){
            coin.restar(`${mention.id}.coins`, args[1])
            message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Developer")
                .setColor("GREEN")
                .setDescription(`Fueron removidos ${args[1]} al usuario ${mention}`)
            )

            canal.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Developer")
                .setColor("RED")
                .setDescription(`El staff ${message.author} \n removió ${args[1]} Coins al usuario ${mention}`)
            )
        }
    }
}