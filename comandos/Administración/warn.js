const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  nombre: "warn",
  alias: ["w"],
  desc: "Advertir a quien no obedezca las reglas",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        ":x: No tienes los permisos suficientes para ejecutar este comando!"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Menciona a la persona que quisieras warnear - warn @mencion <razòn>"
      );
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send(":x: No se pueden warnear bots!");
    }

    if (message.author.id === user.id) {
      return message.channel.send(":x: No puedes warnearte a ti mismo!");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        ":x: No puedes warnear al dueño del servidor de discord!"
      );
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        "Porfavor proporciona la razon del warneo - warn @mencion <razòn>"
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `Has sido advertido en **${message.guild.name}** por ${reason}`
      );
      await message.channel.send(
        `Tu advertiste **${
          message.mentions.users.first().username
        }** por ${reason}`
      );
    } else if(warnings !== null) {
      
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      
      user.send(`Has sido advertido en **${message.guild.name}** por ${reason}`);
      
      await message.channel.send(`Tu advertiste a **${message.mentions.users.first().username}** por ${reason}`);
      
      message.delete
      
    }
  }
};
