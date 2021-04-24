module.exports = async (client, oldChannel, newChannel) => {
    const Discord = require('discord.js')
    const db = require('megadb')
    const logs = new db.crearDB('Logs')
    if(!oldChannel.guild) return;

    let canal = await logs.obtener(oldChannel.guild.id)

    oldChannel.guild.fetchAuditLogs().then(logs => {
        if(oldChannel.name !== newChannel.name) {
            let msgName = new Discord.MessageEmbed()
            .setTitle('**Etherium Security | Logs**')
            .setColor('RED')
            .setDescription(`**Canal editado**\nNombre anterior: **${oldChannel.name}**\nNuevo nombre: **${newChannel.name}**\nCanal ID: **${oldChannel.id}**`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL())

            client.channels.cache.get(canal).send(msgName)
        }else if(oldChannel.nsfw !== newChannel.nsfw){


            let msgName = new Discord.MessageEmbed()
            .setTitle('**Etherium Security | Logs**')
            .setColor('RED')
            .setDescription(`**Canal editado**\nNfsw: **${newChannel.nsfw}**\nCanal ID: **${oldChannel.id}**`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL())
            
      client.channels.cache.get(canal).send(msgName)
      }
    })

}