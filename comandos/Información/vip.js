const discord = require('discord.js');
module.exports = {
    nombre: 'vip',
    alias: [],
    desc: "Te mostrará los beneficios VIP",
    run: (client, message, args) => {
        message.delete()
        const msgEmbed = new discord.MessageEmbed()
        .setTitle("<a:ES_verified:770984597437022220> **|** Funciones premium **|** <a:ES_verified:770984597437022220>")
        .addField("<:ES_Premium:770788084560166922> **|** BackUp", "`Podrás hacer y subir un BackUp de tu servidor por cualquier problema que tengas!`")
        .addField("<:ES_Premium:770788084560166922> **|** PartnerShips","`Podrás aparecer en PartnerShips!`")
        .addField("<:ES_Premium:770788084560166922> **|** Soporte","`Recibirás soporte especializado en cualquier cosa que necesites!`")
        .setFooter("Etherium Security | VIP","https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
        .setTimestamp()
        message.channel.send({embed: msgEmbed})
    }
}