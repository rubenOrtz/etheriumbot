
const { danceP } = require(`../../actions.json`);
const Discord = require("discord.js");
module.exports = {
    nombre: 'bailar',
    alias: [],
    desc: "Baila!",
    run: async(client, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const dance = danceP[Math.round(Math.random() * (danceP.length - 1))];

    const embed = new Discord.MessageEmbed().setColor("RANDOM").setTitle(`${message.author.tag} Demuestra su talento de bailar!`).setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif').setTimestamp().setImage(dance);
    message.channel.send(embed);
  }
};
