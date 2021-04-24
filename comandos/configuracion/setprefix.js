const discord = require('discord.js');
const megadb = require('megadb');
const db = require('megadb');
let prefix_db = new megadb.crearDB('prefix');
module.exports = {
    nombre: 'setprefix',
    alias: [],
    desc: "Podrás cambiar el prefix default al que mas gustes",
    run: (client, message, args) => {
        let user = message.mentions.members.first() || message.author

        const SyntaxA = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `setprefix`"+ "__`<Prefix>`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        const SyntaxL = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `setprefix`"+ "__`<Prefix>`__ (Ménos de 3 carácteres)")
        .setTimestamp()
        .setFooter("Etherium Security")

        const Perms = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: "+ "__`No tienes permisos`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(Perms)
        if(!args[0]) return message.channel.send(SyntaxA)
        if(args[0].length > 3) return message.channel.send(SyntaxL)
        prefix_db.establecer(message.guild.id, args[0]).then(d => {
            const msgEmbed = new discord.MessageEmbed()
            .addField("Prefix cambiado por:", `${user}`)
            .addField("Ahora el prefix es:",`${args}`)
            .setColor("BLACK")
            .setFooter("Etherium Security | Prefix" ,"https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            message.channel.send({embed: msgEmbed})
        }).catch(error => {
            message.channel.send(`Ocurrió un error inesperado! : ${error.message}`)
        })
        return

    }
}