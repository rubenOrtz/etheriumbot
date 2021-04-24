const Discord = require("discord.js");
const figlet = require("figlet");

module.exports = {
  nombre: 'ascii',
  alias: ["asc"],
  desc: "Convierte texto en ascii!",
  run: async(client, message, args) => {
    if (!args[0]) return message.channel.send("Proporcione un texto");

    msg = args.join(" ");

    figlet.text(msg, function(err, data) {
      if (err) {
        console.log("Algo salió mal");
        console.dir(err);
      }
      if (data.length > 2000)
        return message.channel.send(
          "Proporcione un texto de menos de 2000 caracteres"
        );

      message.channel.send("```" + data + "```");
    });
  }
};
