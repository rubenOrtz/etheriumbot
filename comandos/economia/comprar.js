const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    nombre: 'comprar',
    alias: ["cmp"],
    desc: "Compra algo de la tienda!",
    run: async(client, message, args) => {

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`\<a:check:785517711504441344> Tu necesitas \<a:money:785313382206799893> 3500 monedas para comprar un VIP`);

    if (args[0] == 'vip') {
        if (author < 3500) return message.channel.send(Embed)
        
        db.fetch(`vip_${message.guild.id}_${user.id}`);
        db.set(`vip_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:verify:785280736969228289> Compraste un VIP a \<a:money:785313382206799893> 3500 monedas`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(Embed2)
    } else if(args[0] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:check:785517711504441344> Tu necesitas \<a:money:785313382206799893> 600 monedas para comprar unas Nikes`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.add(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:verify:785280736969228289> Compraste unas fresh nikes a \<a:money:785313382206799893> 600 monedas`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'auto') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:check:785517711504441344> Tu necesitas \<a:money:785313382206799893> 800 monedas para comprar un Auto`);

        if (author < 800) return message.channel.send(Embed2)
       
        db.fetch(`auto_${message.guild.id}_${user.id}`)
        db.add(`auto_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:verify:785280736969228289> Compraste un nuevo Auto a \<a:money:785313382206799893> 800 monedas`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:check:785517711504441344> Tu necesitas \<a:money:785313382206799893> 1200 monedas para comprar una Mansion!`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`mansion_${message.guild.id}_${user.id}`)
        db.add(`mansion_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:verify:785280736969228289> Compraste una mansión a \<a:money:785313382206799893> 1200 monedas`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    } else if(args[0] == 'ps5') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:check:785517711504441344> Tu necesitas \<a:money:785313382206799893> 5000 monedas para comprar una PS5!`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`ps5_${message.guild.id}_${user.id}`)
        db.add(`ps5_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:verify:785280736969228289> Compraste PS5 a \<a:money:785313382206799893> 5000 monedas`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
        message.channel.send(Embed3)

        
    }

}
}
  