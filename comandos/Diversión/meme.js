const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const got = require("got");

module.exports = {
  nombre: 'meme',
  alias: [],
  desc: "Envia un meme random!",
  run: async(client, message, args) => {
    const embed = new Discord.MessageEmbed();
    got("https://www.reddit.com/r/spanishmeme/random/.json").then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.setTitle(`${memeTitle}`);
      embed.setURL(`${memeUrl}`);
      embed.setImage(memeImage);
      embed.setColor("BLACK")
      embed.setFooter("Etherium Security | Diversion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
      embed.setTimestamp()
      message.channel.send(embed);
    });
  }
};
