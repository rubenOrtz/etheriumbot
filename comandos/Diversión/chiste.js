const discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    nombre: 'chiste',
    alias: ["chistemalo"],
    desc: "SpaceBot te contará un Chiste malo!",
    run: async(client, message, args) => {
        const res = await fetch('https://risapi.bacanoicua.tk/')
        const json = await res.json();
        const msgEmbed = new discord.MessageEmbed()
        .setTitle('Etherium Security | Chiste')
        .setColor("BLACK")
        .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
        .setTimestamp()
        .addField(`Te cuento un chiste! `, `${json.chiste}`)
        message.channel.send({embed: msgEmbed})

    }
}