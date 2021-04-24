const discord = require('discord.js')
const db = require('megadb');
const logs = new db.crearDB("Logs")
module.exports = async(client, member) => {

    let canal = await logs.obtener(member.guild.id)
    if (!canal) return;

    const removeEmbed = new discord.MessageEmbed()
    .setTitle("Logs | Nuevo usuario")
    .setColor("RED")
    .setDescription(`📤 | El usuario <@${member.id}> se ha retirado del servidor`)
    .setFooter(`ID : ${member.id}`)
    client.channels.cache.get(canal).send(removeEmbed)
}