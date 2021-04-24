const Discord = require("discord.js")

module.exports = {
  nombre: 'encuesta',
  alias: ["poll"],
  desc: "Con este comando podras hacer encuestas!",
  run: async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("Permisos insuficientes!").then(m => m.delete(5000));
    }
    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(1).join(" ");

    let embedPoll = new Discord.MessageEmbed()
      .setTitle("\<a:eencuestas:790058572033556541>  ¡Nueva encuesta! \<a:eencuestas:790058572033556541>")
      .setDescription(pollDescription)
      .setColor("BLACK")
      .setFooter(`Etherium Security | Encuestas creada por ${message.author.tag}`,"https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
      .setTimestamp()
    let msgEmbed = await pollChannel.send(embedPoll);
    await msgEmbed.react("\<a:esi:790058570732535818>");
    await msgEmbed.react("\<a:eno:790058568514404363>");
    message.delete();
  }

}