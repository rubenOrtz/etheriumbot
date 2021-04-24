const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  nombre: 'tiendainfo',
  alias: ["tiendai"],
  desc: "Mira el item de la tienda!",
  run: async(client, message, args) => {
  
    if (args[0] == 'vip') {
    
      let embed = new Discord.MessageEmbed()
      .setDescription("\<:vip:785542229921759293> **VIP**\n\nBeneficios: Posibilidad de obtener más monedas \<a:money:785313382206799893> robando a alguien")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'nikes') {
      let embed = new Discord.MessageEmbed()
      .setDescription("\<a:verify:785280736969228289> **Fresh Nikes**\n\nBeneficios Posibilidad de ganar \<a:money:785313382206799893> monedas, roles en nuestro Discord Server")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'auto') {
      let embed = new Discord.MessageEmbed()
      .setDescription("\<:auto:785541816816500746> **Auto**\n\nBeneficios Posibilidad de ganar \<a:money:785313382206799893> monedas, roles en nuestro Discord Server")
      .setColor("#FFFFFF")
      message.channel.send(embed)
  } else if(args[0] == 'mansion') {
    let embed = new Discord.MessageEmbed()
    .setDescription("\<a:mansion:785542679789436948> **Mansion**\n\nBeneficios Posibilidad de ganar \<a:money:785313382206799893> monedas, roles en nuestro Discord Server")
    .setColor("#FFFFFF")
    message.channel.send(embed)
  } else if(args[0] == 'ps5') {
      let embed = new Discord.MessageEmbed()
      .setDescription("\<a:discordnitro:785498885916721173> **PS5**\n\nSi compras este item es coleccionable, cosa que puedes competir con tus amigos por quien tiene mas PS5!")
      .setColor("#FFFFFF")
      message.channel.send(embed)
  }

  }

  }