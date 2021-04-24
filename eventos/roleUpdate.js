module.exports = async (client, newRole, oldRole) => {

    const discord = require('discord.js');
    const db = require('megadb');
    const logs = new db.crearDB("Logs")

    let canal = await logs.obtener(newRole.guild.id)
    if (!canal) return;

    if (!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

    oldRole.guild.fetchAuditLogs().then(logs => {
        let userID = logs.entries.first().executor.id;
        let userAvatar = logs.entries.first().executor.avatarURL();

        if(oldRole.name !== newRole.name) {
            let msgChannel = new discord.MessageEmbed()
                .setTitle('**Etherium Security | Logs**')
                .setColor('RED')
                .setThumbnail(userAvatar)
                .setDescription(`**Rol editado **\nNombre anterior: **${oldRole.name}**\nNuevo nombre: **${newRole.name}**\nID rol: **${oldRole.id}**\nPor: <@${userID}> (ID: ${userID})`)
                .setTimestamp()
                .setFooter(oldRole.guild.name, oldRole.guild.iconURL())
            client.channels.cache.get(canal).send(msgChannel)
        }

    })
}