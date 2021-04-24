const slotItems = ["\<a:gamemoney:785277767951974460>", "\<a:estrella:785492859503640586>", "\<a:diamante:785544650478846003>", "\<:manzana:785296804270309436>", "\<:enderperl:785296806200082443>", "\<:carbon:785296806531301385>", "\<:gold:785296806983630868>"];
const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    nombre: 'slots',
    alias: ["slot"],
    desc: "Gira el slot!",
    run: async(client, message, args) => {

    let user = message.author;
    let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`\<a:check:785517711504441344> Estás apostando más de lo que tienes`);

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`\<a:check:785517711504441344> Especifique una cantidad`);

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n**Ganaste!** \<a:money:785313382206799893> ${money} monedas`)
            .setColor("#FFFFFF")
        message.channel.send(slotsEmbed1)
        db.add(`money_${message.guild.id}_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n**Perdiste!** \<a:money:785313382206799893> ${money} monedas`)
            .setColor("#FFFFFF")
        message.channel.send(slotsEmbed)
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
    }

}
  

  }