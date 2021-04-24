module.exports = async (client, channel) => {
    const discord = require('discord.js');
    const db = require('megadb');
    const logs = new db.crearDB("Logs")

    const create = new discord.MessageEmbed()
    .setTitle("Etherium Security | Log's")
    .setColor("#20F9AA")
    .setDescription(`**Un canal fue creado** \n\n <#${channel.id}>`)
    .setFooter("Etherium Security | Channel Log's")
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    let canal = await logs.obtener(channel.guild.id)
    if (!canal) return;
    client.channels.cache.get(canal).send(create)

}