const discord = require('discord.js')
module.exports = {
    nombre: "nuevo22",
    alias: [],
    desc: "Se podrá ver todas las actualizaciones!",
    run: (client, message, args) => {
        const msgEmbed = new discord.MessageEmbed()
        .setTitle("📰 Actualizaciones Etherium Security 📰")
        .setColor("YELLOW")
        .addFields(
            {name: "Visuales", value: "`Reajustamos varias visuales de varios comandos`"},
            {name: "Música", value: "Ahora podrás escuchar tus canciones preferidas mientras hablas con tus amigos `ayuda musica`"},
            {name: "Perfil", value: "Se agregó un sistema de perfiles, podras crear y personalizar el tuyo! `ayuda perfil`"},
            {name: "Filtros", value: "Añadimos 3 filtros mas Anti Flood, Links e IPLoggers, también son configurables `ayuda configuracion`"},
            {name: "Logs", value: "Ya puedes setear el canal donde ver los Log's de tu servidor! `ayuda configuracion`"},
            {name: "GiveAway", value: "¡Podrás hacer tus sorteos con Etherium Security! `ayuda giveaway`"},
            {name: "Covid", value: "Puedes ver la cantidad de casos en el paise que guste y las medidas de seguridad"},
            {name: "Coins", value: "Añadimos Etherium Coins, reemplazando el VIP y con eso se podra comprar diversos beneficios `tienda`"}
        )
        .setFooter('Etherium Security | 2.0', 'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()

        message.channel.send({embed: msgEmbed})
    }
}