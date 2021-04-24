const Discord = require("discord.js");
const { handP } = require("../../actions.json");

module.exports = {
  nombre: 'mano',
  alias: [],
  desc: "Darle la mano a otra persona",
  run: async(client, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const hand = handP[Math.round(Math.random() * (handP.length - 1))];
    if (!args[0]) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `No puedes tomar tu propia mano, pero yo tomaré tu mano, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(hand);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == message.author) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `No puedes tomar tu propia mano, pero yo tomaré tu mano, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(hand);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == "725432896533299200") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `supongo que tomaré tu mano, ${message.author.username} - senpai!`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(hand);
      return message.channel.send(embed);
    } else if (message.mentions.users.first()) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username} se toma de la mano con ${
            message.mentions.users.first().username
          }`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(hand);
      return message.channel.send(embed);
    }
  }
};
