const Discord = require("discord.js");

module.exports = {
  nombre: 'buscaminas',
  alias: [],
  desc: "Juega al buscaminas!",
  run: async(client, message, args) => {
    
    if (message.channel.id == "ID CANAL") {
      message.channel.send("No puedes jugar al buscaminas en el chat general");
      // If the channel it wasn't verification channel, ignore it.
      return;
    }
    const Minesweeper = require("discord.js-minesweeper");

    const minesweeper = new Minesweeper({
      returnType: "emoji"
    });
    var mines = minesweeper.start();
    message.channel.send(mines);
  }
};
