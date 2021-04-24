const Discord = require("discord.js");
const db = require('megadb')
const prefix_db = new db.crearDB('prefix')

module.exports = {
  nombre: 'ppt',
  alias: [],
  desc: "Juega a piedra papel o tijeras!",
  run: async(client, message, args) => {
    const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
    const acceptedReplies = ["piedra", "papel", "tijera"];
    const random = Math.floor(Math.random() * acceptedReplies.length);
    const result = acceptedReplies[random];

    const choice = args[0];
    if (!choice)
      return message.channel.send(`*Cómo jugar:* **${prefix}ppt <piedra | papel | tijera>**`)
    if (!acceptedReplies.includes(choice))
      return message.channel.send(
        `Solo se aceptan estas respuestas: \`${acceptedReplies.join(", ")}\``
      );

    console.log("Bot Resultado:", result);
    if (result === choice)
      return message.reply(
        `Tu elejiste **${
          args[0]
        }** y elegí **${result}** Y nosotros atados quiero intentarlo de nuevo?`
      );

    switch (choice) {
      case "piedra": {
        if (result === "papel")
          return message.reply(
            `Tu elegiste **${
              args[0]
            }** y elegí **${result}** ¡y yo gané! Bien jugado!`
          );
        else
          return message.reply(
            `Tu elegiste **${
              args[0]
            }** y elegí **${result}** y perdí! Felicidades por ganar!`
          );
      }
      case "papel": {
        if (result === "tijera")
          return message.reply(
            `Tu elegiste **${
              args[0]
            }** y elegí **${result}** ¡y yo gané! Bien jugado!`
          );
        else
          return message.reply(
            `Tu elegiste **${
              args[0]
            }** y elegí **${result}** y perdí! Felicidades por ganar!`
          );
      }
      case "tijera": {
        if (result === "piedra")
          return message.reply(
            `Tu elegiste **${
              args[0]
            }** y elegí **${result}** ¡y yo gané! Bien jugado!`
          );
        else
          return message.reply(
            `Tu elegiste **${
              args[0]
            }** y elegí **${result}** y perdí! Felicidades por ganar!`
          );
      }
      default: {
        return message.channel.send(
          `Solo se aceptan estas respuestas: \`${acceptedReplies.join(", ")}\``
        );
      }
    }
  }
};
