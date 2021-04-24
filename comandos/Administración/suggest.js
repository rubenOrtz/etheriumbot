const { MessageEmbed } = require("discord.js");

module.exports = {
  nombre: "sugerir",
  alias: ["s"],
  desc: "Envia tu sugerencia",
  run: (client, message, args) => {

    if (!args.length) {
      return message.channel.send(`Escribe tu sugerencia`);
    }

    let channel = message.guild.channels.cache.find(x => x.name === "sugerencia" || x.name === "sugerencias");

    if (!channel) {
      return message.channel.send("No existe un canal llamado | sugerencias");
    }

    let embed = new MessageEmbed()
      .setAuthor("Sugerencia: " + message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setColor("BLACK")
      .setDescription(args.join(" "))
      .setFooter('Etherium Security | Sugerencias', 'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
      .setTimestamp();

    channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    });

    message.channel.send("Gracias por tu sugerencia, fue enviada a un staff en " + `${channel}`);
    
    message.delete()
    
  }
};
