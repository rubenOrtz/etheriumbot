const discord = require('discord.js');
module.exports = {
    nombre: 'memide',
    alias: [],
    desc: "El bot dirá cuanto cm's te mide el pene",
    run: (client,message, args) => {
        let mencionado = message.mentions.members.first() || message.member;
        let respuesta = ["0,1cm","2cm","3cm","4cm","10cm","11cm","Terrible tula.","13cm","14cm","15cm","16cm","**Error 404, pene not found**","18cm","19cm","20cm","21cm","30cm","Poderoso el chiquitin!"]
        var random = respuesta[Math.floor(Math.random() * respuesta.length)]
        const embed = new discord.MessageEmbed()

        .setTitle('Etherium Security')
        .setDescription (`A ${mencionado.user.tag} ` +"``" + `le mide:   ${random}`+"``")
        .setColor("BLACK")
        .setThumbnail(mencionado.user.displayAvatarURL())
        .setTimestamp()
        .setFooter('Etherium Security | Diversion ', 'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')

        message.channel.send(embed)
    }
}