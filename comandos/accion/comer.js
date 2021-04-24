const Discord = require("discord.js");
const { eatP } = require("../../actions.json");

module.exports = {
  nombre: 'comer',
  alias: [],
  desc: "Come algo",
  run: async(client, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const eat = eatP[Math.round(Math.random() * (eatP.length - 1))];

    const embed = new Discord.MessageEmbed().setColor("RANDOM").setTitle(`${message.author.tag} Esta comiendo!`).setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif').setTimestamp().setImage(eat);
    message.channel.send(embed);
  }
};
