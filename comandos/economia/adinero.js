const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  nombre: 'adinero',
  alias: ["am"],
  desc: "Agrega dinero a un usuario!",
  run: async(client, message, args) => {
  let ownerID = '615360256922484757'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`\<a:verify:785280736969228289> Has agregado \<a:money:785313382206799893> ${args[1]} monedas\n\nNuevo dinero \<a:money:785313382206799893> ${bal}`);
    message.channel.send(moneyEmbed)

  }
}