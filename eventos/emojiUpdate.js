module.exports = async (client, oldEmoji, newEmoji) => {
    const discord = require('discord.js');
    const db = require('megadb');
    const logs = new db.crearDB("Logs")
    let canal = await logs.obtener(newEmoji.guild.id)
    if (!canal) return;
    if (!oldEmoji.guild) return;

    oldEmoji.guild.fetchAuditLogs().then(logs => {
        let userID = logs.entries.first().executor.id;
        if (oldEmoji.name !== newEmoji.name) {

            const log = new discord.MessageEmbed()
                .setTitle("Etherium Security | Log's")
                .setDescription(`Emoji editado: ${oldEmoji.name} \n Nuevo nombre: ${newEmoji.name} \n\n Modificado por: <@${user.id}>\n ID: ${user.id}`)
                .setColor("YELLOW")
                .setFooter("Etherium Security")

            client.channels.cache.get(canal).send(log)
        }
    })
}