module.exports = async (client, emoji) => {
    const discord = require('discord.js');
    const db = require('megadb');
    const logs = new db.crearDB("Logs")
    if (emoji.author.bot) return;

    let canal = await logs.obtener(emoji.guild.id)
    if (!canal) return;

    const log = new discord.MessageEmbed()
    .setTitle("Etherium Security | Log's")
    .setDescription(`Emoji creado: ${emoji.name}\n Animado: ${emoji.animated}\n\n url: ${emoji.url}`)
    .setColor("YELLOW")
    .setFooter("Etherium Security")

    client.channels.cache.get(canal).send(log)

}