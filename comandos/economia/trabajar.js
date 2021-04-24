const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports = {
  nombre: 'trabajar',
  alias: ["trb"],
  desc: "Trabaja!",
  run: async(client, message, args) => {

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:check:785517711504441344> Ya has trabajado recientemente\n\nInténtalo de nuevo en ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programador','Builder','Mecanico','FuckBoy','Chef','Rugbier']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 280) + 80;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:verify:785280736969228289> Trabajaste como ${replies[result]} y ganaste \<a:money:785313382206799893> ${amount} monedas`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}



}
