const {
    MessageEmbed
} = require('discord.js')
const superagent = require('superagent')
module.exports = {
    nombre: 'covid',
    alias: [],
    desc: "Te mostrara los casos y enfermos de covid",
    run: async (client, message, args) => {

        const SyntaxA = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `covid`" + "__`<Pais>`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxE = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`El nombre del pais es inválido`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        let pais = args[0]
        if (!pais) return message.channel.send(SyntaxA)
        superagent.get(`https://corona.lmao.ninja/v2/countries/${pais}`).end((err, res) => {
                let body = res.body

                if (body.message) return message.channel.send(SyntaxE)

                var embed = new MessageEmbed()
                    .setAuthor("Casos del pais " + pais)
                    .addField("**Casos Totales**", `${body.cases}`, true)
                    .addField("**Casos Críticos**", `${body.critical}`, true)
                    .addField("**Casos Hoy**", `${body.todayCases}`, true)
                    .addField("**Muertes Totales**", `${body.deaths}`, true)
                    .addField("**Muertes Hoy**", `${body.todayDeaths}`, true)
                    .addField("**Recuperados**", `${body.recovered}`, true)
                    .addField("**Medidas de Prevención**", ":small_blue_diamond: Lavarse las manos frecuentemente \n:small_blue_diamond: Usar Gel Antibacterial\n:small_blue_diamond: Usar Alcohol\n:small_blue_diamond: Para Toser o estornudar usar un pañuelo \n:small_blue_diamond: Evitar contacto directo de personas con sintoma de Tos y Gripe.", true)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("#QuedateEnCasa", "https://fems-microbiology.org/wp-content/uploads/2020/03/2019-nCoV-CDC-23312_without_background-pubic-domain.png")
                    .setThumbnail("https://www.elindependiente.com/wp-content/uploads/2020/03/gif-mapa-internacional.gif")
                message.channel.send(embed)
            })
    }
}