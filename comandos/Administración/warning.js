const db = require("quick.db");

module.exports = {
  nombre: "warnings",
  alias:["warns"],
  desc: "Mira todo los warns que tiene un usuario!",
  run: (client, message, args) => {
    const user = message.mentions.members.first() || message.author;

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    message.channel.send(`${user} tiene **${warnings}** warn(s)`);
  }
};
