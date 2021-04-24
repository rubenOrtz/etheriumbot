const discord = require('discord.js');

module.exports = {
    nombre: 'invite',
    alias: ["invitacion"],
    desc: "Invita al bot a tu servidor",
    run: (client, message, args) => {
        const msgEmbed  = new discord.MessageEmbed()
        .setTitle('Protege tu servidor con Etherium Security e invitame!')
        .setURL('https://discord.com/oauth2/authorize?client_id=756650662015664208&scope=bot&permissions=2080898303')
        .setColor("BLACK")
        .setDescription('`¡Clickea el Titulo!`')
        .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
        .setTimestamp()
        return message.channel.send(msgEmbed)
    }
}