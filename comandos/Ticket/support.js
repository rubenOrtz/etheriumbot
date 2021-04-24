const discord = require('discord.js')
const db = require('megadb')
const ticket_DB = new db.crearDB('tickets_DB')
const ticket_log_DB = new db.crearDB('ticket_log-DB')

module.exports = {
    nombre: 'support',
    alias: [],
    desc: "",
    run: async(client, message, args) => {
        const user = message.member;
        const mención = message.mentions.members.first()


        /* Ticket  ERROR */


        if(!ticket_DB.tiene(`${message.guild.id}`)){
            const ErrorEmbed1 = new discord.MessageEmbed()
            .setTitle("Etherium | Ticket Tool")
            .setDescription("¡El servidor no tiene habilitada la función de Tickets!")
            .setColor("RED")
            .setTimestamp()

            return message.channel.send(ErrorEmbed1)
        }

    
        /* Ticket Function */


        if(ticket_DB.tiene(`${message.guild.id}`, "Activado")){
            message.channel.send("Gordo tetas, está funcionando, pero algo mal hiciste")
        }







                /* Log's */

                if(!ticket_log_DB.tiene(`${message.guild.id}`)) return;
                let canal = await ticket_log_DB.obtener(`${message.guild.id}`)
        
                if(ticket_log_DB.tiene(`${message.guild.id}`)){
                    const Ticket_Log_Embed = new discord.MessageEmbed()
                    .setTitle("Etherium | Ticket Tool")
                    .setTimestamp()
                    .setColor("GREEN")
                    .setDescription(`${user} ha creado un ticket`)
                    .setFooter("Ticket Log's")
                    message.channel.send(Ticket_Log_Embed)
                }
    }
}