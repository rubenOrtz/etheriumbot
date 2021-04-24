const Discord = require('discord.js')
const client = require('../../etherium.js')
const db = require('quick.db')
const ms = require('ms')
const Long = require('long')

module.exports = {
    nombre: 'crimen',
    alias: ["cm"],
    desc: "Organiza un crimen!",
    run: async(client, message, args) => {
        let payment = Math.floor(Math.random() * 1001) + 250
        let percentGenerater = Math.floor(Math.random() * 101)

        if (percentGenerater > 35) {
            let timeout = 10 * 60000;
            let work = await db.fetch(`crime_${message.guild.id}_${message.author.id}`);

            if (work !== null && timeout - (Date.now() - work) > 0) {
                let time = ms(timeout - (Date.now() - work));

                return message.channel.send(`Espere 10 minutos antes de volver a cometer un delito.`)
            } else {
                db.add(`money_${message.guild.id}_${message.author.id}`, payment);
                db.set(`crime_${message.guild.id}_${message.author.id}`, Date.now());

                let workEmbed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setDescription("Robaste \<a:money:785313382206799893>" + payment + ' de el banco!')
                    .setTimestamp()
                    .setColor("GREEN")
                message.channel.send(workEmbed)

            }
        } else {
            let authorsCash = db.fetch(`money_${message.guild.id}_${message.author.id}`)
            let percentAmount = Math.floor(Math.random() * 33)
            let robAmount = Math.floor(authorsCash * (percentAmount) / 100)

            db.subtract(`money_${message.guild.id}_${message.author.id}`, robAmount)
            db.set(`crime_${message.guild.id}_${message.author.id}`, Date.now())

                let embed = new Discord.MessageEmbed()
                .setTitle('F!')
                .setColor(FF0000)
                .setDescription(`¡Un policía te atrapó mientras robabas el banco! Fuiste multado \<a:money:785313382206799893> ${robAmount}!`)
                .setFooter(message.client.user.username, message.client.user.displayAvatarURL({
                    dynamic: true
                }))
            message.channel.send(embed)
        }
    }
}