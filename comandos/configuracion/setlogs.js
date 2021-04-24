const discord = require('discord.js');
const db = require('megadb');
const logs = new db.crearDB("Logs")
module.exports = {
  nombre: 'setlogs',
  alias: [],
  desc: 'Logs Guild',
  run: async (client, message, args) => {

    const SyntaxCC = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Etherium Security")
      .setDescription("Syntax Error: `setlogs create`"+ "__`<#canal>`__")
      .setTimestamp()
      .setFooter("Etherium Security")
      const SyntaxCD = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Etherium Security")
      .setDescription("Syntax Error: `setlogs delete`"+ "__`<#canal>`__")
      .setTimestamp()
      .setFooter("Etherium Security")
      const SyntaxA = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Etherium Security")
      .setDescription("Syntax Error: `setlogs`"+ "__`<Create/Delete>`__")
      .setTimestamp()
      .setFooter("Etherium Security")


      if(!args[0]){
        return message.channel.send(SyntaxA)
      }
    if (args[0] === "create") {

      let canal1 = message.mentions.channels.first()
      if (!canal1) return message.channel.send(SyntaxCC)

      logs.establecer(`${message.guild.id}`, canal1.id)
      message.channel.send(
        new discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle(":tophat: Logger | SetLogs")
        .setThumbnail(message.guild.iconURL)
        .addField("Se establecio un canal", `${canal1}`)
      )

    } else if (args[0] === "delete") {
      let canal2 = message.mentions.channels.first()
      if (!canal2) return message.channel.send(SyntaxCD)
      logs.eliminar(`${message.guild.id}`, canal2.id)
      message.channel.send("Canal de eventos eliminado.")

    }

  }
}