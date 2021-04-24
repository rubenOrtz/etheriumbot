const discord = require('discord.js');
const db = require('megadb');
const logs = new db.crearDB("Logs")
module.exports = async (client, message) => {
    if(message.bot) return;
    let canal = await logs.obtener(message.guild.id)
    if (!canal) return;
    const msgDelete = new discord.MessageEmbed()
    .setTitle("Logs | Mensaje borrado")
    .setColor("RED")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription("───────────────────────"+ "\n\nEn: "+ `${message.channel} \n\nContenido: ${message}`)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setFooter(`ID : ${message.author.id}`)

    client.channels.cache.get(canal).send(msgDelete)
}