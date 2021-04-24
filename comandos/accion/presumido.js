const Discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  nombre: 'presumido',
  alias: [],
  desc: "Presume una foto alazar!",
  run: async(client, message, args) => {
    let data = await random.getAnimeImgURL("smug");
    message.channel.send(data);
  }
};
