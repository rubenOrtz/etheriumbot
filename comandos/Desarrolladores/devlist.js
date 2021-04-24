const discord = require('discord.js');
const db = require('megadb');
let devs = new db.crearDB('developers')

module.exports = {
    nombre: "devlist",
    alias: [],
    desc: "Mostrará todos los developers en la lista!",
    run: (client, message, args) => {
        devs.map(false, (v, key) => `**Desarrollador**: ${v}`).then(datos => {
            return message.channel.send(
                new discord.MessageEmbed()
                .addField("**Lista de Desarrolladores**", datos)
                .setFooter("Etherium Security | Desarrolladores", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
                .setTimestamp()
            )
        })
    }
}