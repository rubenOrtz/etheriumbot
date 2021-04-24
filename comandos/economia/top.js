const Discord = require('discord.js')
const client = require('../../etherium.js')
const db = require('quick.db')

module.exports = {
    nombre: 'top',
    alias: ["tops"],
    desc: "Mira el top!",
    run: async(client, message, args) => {

        let cashInHand = db.all().filter(data => data.ID.startsWith(`money_${message.guild.id}`)).sort((a, b) => b.data - a.data)
        let moneyInBank = db.all().filter(data => data.ID.startsWith(`bank`)).sort((a, b) => b.data - a.data)

        cashInHand.length = 10;
        moneyInBank.length = 10
        var finalLb = "";
        if (!args.length) {
            let embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({
                    dynamic: true
                })).setDescription('\<a:verify:785280736969228289> Inválido `[dinero | banco]` argumentos dados.')
                .addField('Utiliza:', '`top <dinero | banco>`')
                .setColor("BLACK")
                .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
                message.channel.send(embed)

        } else if (args[0] === "dinero") {
            for (var i in cashInHand) {
                finalLb += `**${cashInHand.indexOf(cashInHand[i])+1}. <@${message.client.users.cache.get(cashInHand[i].ID.split('_')[2]) ? message.client.users.cache.get(cashInHand[i].ID.split('_')[2]).id : "Unknown User#0000"}>** • \<a:money:785313382206799893>  ${cashInHand[i].data}\n`;
            }
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Top Dinero ${message.guild.name}`, 'https://media.discordapp.net/attachments/506838906872922145/506899959816126493/h5D6Ei0.png')
                .setColor("#7289da")
                .setDescription(finalLb)
                .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(embed);
        } else if (args[0] === "banco") {
            for (var i in moneyInBank) {
                finalLb += `**${moneyInBank.indexOf(moneyInBank[i])+1}. <@${message.client.users.cache.get(moneyInBank[i].ID.split('_')[2]) ? message.client.users.cache.get(moneyInBank[i].ID.split('_')[2]).id : "Unknown User#0000"}>** • \<a:money:785313382206799893>  ${moneyInBank[i].data}\n`;
            }
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Top Banco ${message.guild.name}`, 'https://media.discordapp.net/attachments/506838906872922145/506899959816126493/h5D6Ei0.png')
                .setColor("#7289da")
                .setDescription(finalLb)
                .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(embed);
        }

    }

      }