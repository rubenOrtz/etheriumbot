const discord = require('discord.js')
const db = require('megadb')
const logs = new db.crearDB('Logs')
module.exports = async (client, oldMember, newMember) => {
    let canal = await logs.obtener(newMember.guild.id)
    if (!canal) return;
    if (oldMember.nickname !== newMember.nickname) {
        let msgChannel = new Discord.MessageEmbed()
            .setTitle('**Etherium Secrutiy | logs**')
            .setColor('RED')
            .setThumbnail(oldMember.displayAvatarURL({dynamic: true}))
            .setDescription(`Usuario: ${oldMember.user.username} (ID: ${oldMember.user.id})\nNickname anterior: ${oldMember.nickname}\nNickname ahora: ${newMember.nickname}`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL())

        client.channels.cache.get(canal).send(msgChannel)
    }
}