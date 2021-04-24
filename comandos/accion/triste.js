const Discord = require("discord.js");
const { cryP } = require("../../actions.json");

module.exports = {
  nombre: 'triste',
  alias: [],
  desc: "Enviar imagen sad random",
  run: async(client, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const cry = cryP[Math.round(Math.random() * (cryP.length - 1))];

    const embed = new Discord.MessageEmbed().setColor("RANDOM").setTitle(`${message.author.tag} Esta depremidio`).setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif').setTimestamp().setImage(cry);
    message.channel.send(embed);
  }
};
