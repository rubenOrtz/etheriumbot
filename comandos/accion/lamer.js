const Discord = require("discord.js");
const { disgustP } = require("../../actions.json");
const { Lick } = require("../../actions.json");

module.exports = {
  nombre: 'lamer',
  alias: [],
  desc: "Lamer a una persona",
  run: async(client, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    var disgust = disgustP[Math.round(Math.random() * (disgustP.length - 1))];
    var lick = Lick[Math.round(Math.random() * (Lick.length - 1))];

    if (!args[0]) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`¿Se lamen?, ${message.author.username}!`)
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(disgust);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == message.author) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`¿Se lamen?,!, ${message.author.username}!`)
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(disgust);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == "725432896533299200") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `donde estas ... lamiéndome.. ${message.author.username} `
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(lick);
      return message.channel.send(embed);
    } else if (message.mentions.users.first()) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username} Esta lamiendo a ${
            message.mentions.users.first().username
          }`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(lick);
      return message.channel.send({ embed: embed });
    }
  }
};
