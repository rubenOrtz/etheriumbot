const {MessageEmbed} = require('discord.js');
const Discord = require("discord.js");
module.exports = {
    nombre: 'pregunta',
    alias: [],
    desc: "Hazle preguntas al bot!",
    run: async(client, message, args) => {
    let answer = [
      "Si",
      "No",
      "No lo sé",
      "¡Pregunta de nuevo más tarde!",
      "¡No estoy seguro!",
      "Por favor no",
      "Dígame usted",
      "Sin duda",
      "No se puede predecir ahora",
      "Sin duda",
      "Yo espero que sí",
      "Hay una alta probabilidad",
      "Espero que no",
      "Lo siento, estoy ocupado",
      "Tal vez si tal vez no",
      "No quiero decir",
      "Intenta preguntarle a la gente",
      "Ella no te quiere"
    ];
    const arg = args.slice(0).join(" ");
    if (!arg) {
      message.channel.send("Por favor haga una pregunta.");
      return;
    }
    let ballembed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setAuthor(
        `${message.author.username} pregunta`,
        message.author.displayAvatarURL({ format: "png", dynamic: true })
      )
      .addField("Pregunta", "```" + arg + "```")
      .addField(
        "Respuesta",
        "```" + answer[Math.floor(Math.random() * answer.length)] + "```"
      )
      .setTimestamp()
      .setFooter("Etherium Security | Pregunta" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
    message.channel.send(ballembed);
  }
};
