const discord = require('discord.js');
const db = require('megadb')
module.exports = {
    nombre: 'salir',
    alias: [],
    desc: "El desarrollador podrá quitar al bot del servidor",
    run: (client, message, args) => {
        let devs = new db.crearDB('developers')
        if (!devs.has(message.author.id))
            return message.reply(`No tienes permiso para hacer eso!`);

        if (!args[0]) return;
        const embedLeave = new discord.MessageEmbed()
            .setTitle('Nos vemos pronto!')
            .setDescription('Por orden del desarrollador fui eliminado forzosamente del servidor')
            .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            .setTimestamp()
        message.delete({
            timeout: 6000
        })
        client.guilds.cache.get(args[0]).leave() + message.channel.send(embedLeave);
    }
}