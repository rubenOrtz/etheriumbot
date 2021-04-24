const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  nombre: 'store',
  alias: ["tnd"],
  desc: "Mira la tienda!",
  run: async(client, message, args) => {


    let embed = new Discord.MessageEmbed()
    .setDescription("**¡Tienda!**\n\n\<:vip:785542229921759293> VIP \<a:money:785313382206799893> 3500 monedas [comprar vip]\n \<a:discordnitro:785498885916721173> PS5 \<a:money:785313382206799893> 5000 monedas [comprar ps5]\n\n**Artículos de estilo de vida**\n\nNike fresh \<a:money:785313382206799893> 600 [comprar nikes]\nAuto \<a:money:785313382206799893> 800 [comprar auto]\nMansion \<a:money:785313382206799893> 1200 [comprar mansion]")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}

}