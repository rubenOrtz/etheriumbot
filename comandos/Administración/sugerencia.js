const discord = require('discord.js')
module.exports = {
    nombre: 'sugerencia',
    alias: [],
    desc: "Podrás enviár una sugerencia para el bot a los developers!",
    run: (client, message, args) => {
        const SyntaxM = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `Sugerencia`" + "__`<Sugerencia>`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        const gracias = new discord.MessageEmbed()
        .setAuthor("Etherium Security | Sugerencia", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
        .setDescription(":hearts: | ¡Muchas gracias por tu sugerencia! \n \n · Pronto veras si fue **aceptada** o **denegada**")
        .setColor("BLACK")
        .setImage("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

        let channel = client.channels.cache.get("770380198469828628")
        let user = message.author;
        let sugerencia = args.join(" ");
        if(!sugerencia) return message.channel.send(SyntaxM);

        let enviar = new discord.MessageEmbed()
        .setAuthor("Etherium Security | Sugerencia", client.user.avatarURL)
        .setDescription(`:black_heart: ___Enviado por:___ ${user} \n \n:point_right: ___Sugerencia:___  \n · ${sugerencia} \n \n · :white_check_mark: ___Sugerencia Aceptada___ \n · :no_entry: ___Sugerencia denegada___`)
        .setColor("#98BCDA")

        channel.send(enviar).then(async function(message) {
        message.react(`✅`).then(() => message.react(`⛔`), 20000);
     });
        message.channel.send(gracias);
    }
}