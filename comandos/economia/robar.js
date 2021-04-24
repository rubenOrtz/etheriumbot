const Discord = require('discord.js')
const client = require('../../etherium.js')
const db = require('quick.db')
const ms = require("parse-ms");

module.exports = {
    nombre: 'robar',
    alias: ["rob"],
    desc: "Robarle dinero a un usuario!",
    run: async(client, message, args) => {
        let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.member;

        let noUserEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
            .setColor("RED")
            .addField('Usage:', '`rob <user>`')
        if (!User) return message.channel.send(noUserEmbed)

        let usersCash = db.fetch(`money_${message.guild.id}_${User.id}`)
        let authorCash = db.fetch(`money_${message.guild.id}_${message.author.id}`)
        let author = await db.fetch(`rob_${message.guild.id}_${User.id}`)

        let timeout = 60000;

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            let timeEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(message.author.tag, message.author.avatarURL({
                    dynamic: true
                }))
                .setTimestamp()
                .setDescription(`\<a:no:785302443604574228> Ya has robado a alguien\nInténtalo de nuevo en 10 minutos`);
            message.channel.send(timeEmbed)
        } else {

            let moneyEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(message.author.tag, message.author.avatarURL({
                    dynamic: true
                }))
                .setTimestamp()
                .setDescription(`\<a:no:785302443604574228> Necesita al menos 200 monedas en su billetera para robar a alguien`);

            if (authorCash < 200) {
                return message.channel.send(moneyEmbed)
            }

            if (usersCash < 0) {
                let moneyEmbed2 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setTimestamp()
                    .setDescription(`\<a:no:785302443604574228> ${User.user.username} no tiene nada que puedas robar`);
                message.channel.send(moneyEmbed2)
            }
            let percentAmount = Math.floor(Math.random() * 43)
            let robAmount = Math.floor(usersCash * (percentAmount) / 100)
            db.subtract(`money_${message.guild.id}_${User.id}`, robAmount)
            db.add(`money_${message.guild.id}_${message.author.id}`, robAmount)
            db.set(`rob_${message.guild.id}_${User.id}`, Date.now())

            let embed = new Discord.MessageEmbed()
                .setDescription(`\<a:verify:785280736969228289> Robaste \<a:money:785313382206799893> ${robAmount} de ${User.user.tag}`)
                .setColor("GREEN")
                .setAuthor(message.author.tag, message.author.avatarURL({
                    dynamic: true
                }))
                .setTimestamp()
            message.channel.send(embed)


        }
    }

      }