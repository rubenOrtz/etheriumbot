const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    nombre: 'vender',
    alias: ["vnd"],
    desc: "Vender items!",
    run: async(client, message, args) => {
    
    let user = message.author;

    if(args[0] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:check:785517711504441344> No tienes Nikes para vender`);

        let nikeses = await db.fetch(`nikes_${message.guild.id}_${user.id}`)

        if (nikeses < 1) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.subtract(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:verify:785280736969228289> Vendiste la Nike nuevas por \<a:money:785313382206799893> 600 monedas`);

        db.add(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'auto') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:check:785517711504441344> No tienes un auto para vender`);

       let cars = await db.fetch(`auto_${message.guild.id}_${user.id}`)

        if (cars < 1) return message.channel.send(Embed2)
       
        db.fetch(`auto_${message.guild.id}_${user.id}`)
        db.subtract(`auto_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:verify:785280736969228289> Vendió un coche por \<a:money:785313382206799893> 800 monedas`);

        db.add(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:check:785517711504441344> No tienes una mansión para vender`);

        let houses = await db.fetch(`mansion_${message.guild.id}_${user.id}`)

        if (houses < 1) return message.channel.send(Embed2)
       
        db.fetch(`mansion_${message.guild.id}_${user.id}`)
        db.subtract(`mansion_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:verify:785280736969228289> Vendió una mansión por \<a:money:785313382206799893> 1200 monedas`);

        db.add(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    };

}
  
  }