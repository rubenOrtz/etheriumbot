const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  nombre: 'suplicar',
  alias: ["rogar"],
  desc: "Suplicar dinero!",
  run: async(client, message, args) => {

  let user = message.author;

  let timeout = 200000;
  let amount = 150;

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`\<a:check:785517711504441344> Ya has rogado recientemente\n\nSuplica de nuevo en ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`\<a:verify:785280736969228289> Has rogado y recibido \<a:money:785313382206799893> ${amount} monedas`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())


  }
}
}