const Discord = require("discord.js");
const { smileP } = require("../../actions.json");

module.exports = {
  nombre: 'sonrisa',
  alias: [],
  desc: "Envia una foto de sonrisa",
  run: async(client, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const smile = smileP[Math.round(Math.random() * (smileP.length - 1))];

    const embed = new Discord.MessageEmbed().setColor("RANDOM").setTitle(`${message.author.tag} Desmutra su sonrisa!`).setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif').setTimestamp().setImage(smile);
    message.channel.send(embed);
  }
};
