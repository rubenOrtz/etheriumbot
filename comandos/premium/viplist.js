const discord = require('discord.js')
const db = require('megadb')
let vip = new db.crearDB('vip')
module.exports = {
    nombre: 'viplist',
    alias: [],
    desc: "Mostrará una lista de usuarios vip's!",
    run: async(client, message, args) => {
        const devs = new db.crearDB('developers')

        if(!devs.has(message.author.id)) return message.channel.send ('\<a:ES_Rechazado:770788116231356496> **|** `No estás autorizado a utilizar este comando!`')

        vip.map(false, (v, key) => `**tag:** ${v} **id:** ${key}`).then(datos => {
            return message.channel.send(
                new discord.MessageEmbed()
                .addField("**<:ES_Premium:770788084560166922> Vips <:ES_Premium:770788084560166922> **", datos)
                .setFooter("Etherium Security | Vip's", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
                .setTimestamp()
            )
        })

    }
}