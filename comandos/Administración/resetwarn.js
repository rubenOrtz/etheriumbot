const db = require("quick.db");

module.exports = {
  nombre: "resetwarns",
  alias: ["rwarns", "rsetwarns"],
  desc: "Reset warnings of mentioned person",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        ":x: No tienes los permisos suficientes para ejecutar este comando!"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Menciona a la persona que quieras borrar sus warns!");
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("Los bot no pueden tener advertencias");
    }

    if (message.author.id === user.id) {
      return message.channel.send("No se le permite restablecer sus advertencias");
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} no tiene ninguna advertencia`);
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(
      `Todas sus advertencias son reiniciadas por ${message.author.username} a ${message.guild.name}`
    );
    await message.channel.send(
      `Restableció todas las advertencias de ${message.mentions.users.first().username}`
    );
  }
};
