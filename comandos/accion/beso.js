const Discord = require("discord.js");
const { kissP } = require(`../../actions.json`);

module.exports = {
  nombre: 'besar',
  alias: [],
  desc: "Darle un beso a una persona",
  run: async(client, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    var kiss = kissP[Math.round(Math.random() * (kissP.length - 1))];

    if (!args[0]) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `No puedes besarte a ti mismo, pero yo te besaré, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(kiss);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == message.author) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `No puedes besarte a ti mismo, pero yo te besaré, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(kiss);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == "725432896533299200") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `No es como si quisiera que me besaras ni nada ${message.author.username}`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(kiss);
      return message.channel.send(embed);
    } else if (message.mentions.users.first()) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username} Le dio un beso a ${
            message.mentions.users.first().username
          }`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(kiss);
      return message.channel.send(embed);
    }
  }
};
