const Discord = require("discord.js")
const { singP } = require('../../actions.json');

module.exports = {
  nombre: 'cantar',
  alias: [],
  desc: "Cantar para las personas",
  run: async(client, message, args) => {

   //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        const sing = singP[Math.round(Math.random() * (singP.length - 1))];
       
            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} Demuestra como canta!`)
                .setColor('RANDOM')
                .setImage(sing)
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setTimestamp()
             message.channel.send(embed)
    }
}