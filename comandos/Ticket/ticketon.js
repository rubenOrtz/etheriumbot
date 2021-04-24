const discord = require('discord.js')
const db = require('megadb')
const ticket_DB = new db.crearDB('tickets_DB')
module.exports = {
    nombre: 'ticket',
    alias: [],
    desc: "Activa la función de Ticket en tu servidor",
    run: async(client, message, args) => {

        if(!args[0]) {
            return message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium | Ticket Tool")
                .setDescription("Syntax Error: Ticket `ON / OFF`")
                .setColor("RED")
            )
        }

        if(args[0] === 'on'){
            if(ticket_DB.tiene(`${message.guild.id}`)){
                const errEmbed = new discord.MessageEmbed()
                .setTitle("Etherium | Ticket Tool")
                .setDescription("Tu servidor ya tiene la función activa")
                .setColor("RED")

                message.channel.send(errEmbed)
            }

            if(!ticket_DB.tiene(`${message.guild.id}`)){
                const embedON = new discord.MessageEmbed()
                .setTitle("Etherium | Ticket Tool")
                .setDescription("La función de Tickets ha sido activada en este servidor!")
                .setColor("GREEN")

                ticket_DB.establecer(`${message.guild.id}`, "Activado")
                message.channel.send(embedON)
            }
        }


    }
}