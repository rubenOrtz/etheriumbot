const discord = require('discord.js')
const db = require('megadb')
const logs = new db.crearDB("Logs")
module.exports = async (client, channel) => {
    const borrado = new discord.MessageEmbed()
    .setTitle("Etherium Security | Log's")
    .setColor("RED")
    .setDescription(`**Un canal fue removido** \n\n <#${channel.id}>`)
    .setFooter("Etherium Security | Channel Log's")
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    let canal = await logs.obtener(channel.guild.id)
    if (!canal) return;

    client.channels.cache.get(canal).send(borrado)
}