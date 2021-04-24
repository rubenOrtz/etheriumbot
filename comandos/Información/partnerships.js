const discord = require('discord.js')
module.exports = {
    nombre: 'partnerships',
    alias: [],
    desc: "Mostrará el nombre de todos los usuarios que estén afiliados!",
    run: (client, message, args) => {
        message.channel.send(
            new discord.MessageEmbed()
            .setTitle("Etherium Security | PartnerShips")
            .setURL("https://discord.gg/Jm3hAv7")
            .setColor("BLACK")
            .setDescription("<a:ES_Boost:770788090738245674> Etherium Security tiene un grupo de PartnerShips que apoyan al bot! \n\n <a:ES_Boost:770788090738245674> ¡Que esperas para unirte a ellos!")
            .addField("<a:ES_verified:770984597437022220> Virtual Hosting <a:ES_verified:770984597437022220>" , "¿Estás buscando un Ts3, VPS, Domino barato?, no dude en preguntar! \n\n `` https://discord.gg/DCQuf92 ``")
            .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
        )
    }
}