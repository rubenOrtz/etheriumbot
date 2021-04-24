const { drinkP } = require(`../../actions.json`);
const Discord = require("discord.js");
module.exports = {
    nombre: 'beber',
    alias: [],
    desc: "Bebe una botella de agua!",
    run: async(client, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const drink = drinkP[Math.round(Math.random() * (drinkP.length - 1))];

    const embed = new Discord.MessageEmbed().setColor("RANDOM").setTitle(`${message.author.tag} Esta sediento`).setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif').setTimestamp().setImage(drink);
    message.channel.send(embed);
  }
};
