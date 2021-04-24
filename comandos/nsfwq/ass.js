const superagent = require("snekfetch");
const Discord = require('discord.js')

const rp = require('request-promise-native');

module.exports = {
  nombre: 'ass',
  alias: [],
  desc: "Envia una foto-gif de un culo!",
  run: async(client, message, args) => {
    if (message.deletable) {
      message.delete();
  }
  //command
  if (!message.channel.nsfw) return message.channel.send(":underage: Necesita ser un canal **NSFW**! para poder enviar este contenido")


  return rp.get('http://api.obutts.ru/butts/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.obutts.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const lewdembed = new Discord.MessageEmbed()
      .setTitle("NSFW ASS")
      .setColor(`#000000`)
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])
      .setFooter("Etherium Security | NSFW" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
      .setTimestamp()


    message.channel.send(lewdembed);
});
  }
  };