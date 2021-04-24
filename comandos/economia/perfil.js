const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  nombre: 'perfile',
  alias: ["pf"],
  desc: "Mira el perfil de un usuarip!",
  run: async(client, message, args) => {

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`vip_${message.guild.id}_${user.id}`)
  if(vip === null) vip = 'No tienes vip'
  if(vip === true) vip = `VIP`

  let ps5 = await db.fetch(`ps5_${message.guild.id}_${user.id}`)
  if(ps5 === null) ps5 = '0'

  let nikes = await db.fetch(`nikes_${message.guild.id}_${user.id}`)
  if(nikes === null) nikes = '0'

  let autos = await db.fetch(`auto_${message.guild.id}_${user.id}`)
  if(autos === null) autos = '0'

  let mansiones = await db.fetch(`mansion_${message.guild.id}_${user.id}`)
  if(mansiones === null) mansiones = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**Perfil de ${user}**\n\nMonedas \<a:money:785313382206799893> ${money}\nBanco \<a:money:785313382206799893> ${bank}\nVIP Rank \<:vip:785542229921759293> ${vip}\nPS5 \<a:discordnitro:785498885916721173> ${ps5}\n\n**Inventario**\n\nNikes \<a:verify:785280736969228289> ${nikes}\nAutos \<:auto:785541816816500746> ${autos}\nMansiones \<a:mansion:785542679789436948> ${mansiones}`);
  message.channel.send(moneyEmbed)
}
}