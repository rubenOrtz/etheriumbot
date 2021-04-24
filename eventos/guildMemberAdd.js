const discord = require('discord.js');
const db = require('megadb');
const logs = new db.crearDB("Logs")
module.exports = async(client, member) => {
    let canal = await logs.obtener(member.guild.id)
    if (!canal) return;

    const addEmbed = new discord.MessageEmbed()
    .setTitle("Logs | Nuevo usuario")
    .setColor("GREEN")
    .setDescription(`📥 | El usuario <@${member.id}> se ha unido al servidor`)
    .setFooter(`ID : ${member.id}`)
    client.channels.cache.get(canal).send(addEmbed)
}