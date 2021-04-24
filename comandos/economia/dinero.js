const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  nombre: 'dinero',
  alias: ["dn"],
  desc: "Mira tu dinero!",
  run: async(client, message, args) => { 

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**Dinero de ${user}**\n\nMonedas \<a:money:785313382206799893> ${bal}\nBanco \<a:money:785313382206799893> ${bank}`);
  message.channel.send(moneyEmbed)
}
}