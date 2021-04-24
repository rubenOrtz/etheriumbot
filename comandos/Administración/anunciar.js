const discord = require('discord.js')
module.exports = {
  nombre: 'anunciar',
  alias: ["avisar"],
  desc: "Con este comando podrás enviár mensajes a un canal que gustes",
  run: async (client, message, args) => {
    let permisos = message.member.hasPermission("ADMINISTRATOR");

    const SyntaxA = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Etherium Security")
      .setDescription("Syntax Error: `anunciar <#canal>`" + "__`<texto>`__")
      .setTimestamp()
      .setFooter("Etherium Security")

    const SyntaxC = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Etherium Security")
      .setDescription("Syntax Error: `anunciar`" + "__`<#canal>`__")
      .setTimestamp()
      .setFooter("Etherium Security")

    if (!permisos)
      return message.channel.send(
        new discord.MessageEmbed()
        .setDescription(
          "❌ > No tienes Permisos para utilizar este comando!"
        )
        .setColor("RED") // Color del embed.
      )

    const canal = message.mentions.channels.first()
    let mensaje_enviar = message.guild.channels.cache.find(channel => channel.name === `${canal}`)
    let texto = args.slice(1).join(" ");

    if (message.content.includes("@everyone")) canal.send("@everyone")

    if (!canal) return message.channel.send(SyntaxC)
    if (!texto) return message.channel.send(SyntaxA)
    canal.send("**| `Anuncio Etherium Security` |** \n\n"+texto)
  }
}