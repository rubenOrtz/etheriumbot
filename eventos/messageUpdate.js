module.exports = async (client, oldMessage, newMessage) => {
    const discord = require('discord.js');
    const db = require('megadb');
    const logs = new db.crearDB("Logs")
    if (newMessage.author.bot) return;

    let canal = await logs.obtener(newMessage.guild.id)
    if (!canal) return;

    let nameChannel = newMessage.channel.name
    let member = newMessage.member.displayName

    const log = new discord.MessageEmbed()
    .setTitle("Etherium Security | Logs")
    .setDescription("Se ha editado un mensaje")
    .setColor("YELLOW")
    .addField("Mensaje :" , `**${oldMessage.content}**`)
    .addField("Nuevo Mensaje:", `**${newMessage.content}**`)
    .addField("En el canal:", `**${nameChannel}**`)
    .addField("Usuario:", `**${member}**`)
    .setFooter(`ID: ${member.id}`)
    client.channels.cache.get(canal).send(log)
}