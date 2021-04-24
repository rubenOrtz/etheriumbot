const discord = require('discord.js')
const db = require('megadb')
const AIFiltro = new db.crearDB('FInvites')
const ALFiltro = new db.crearDB('FLoggers')
const AFFiltro = new db.crearDB('FFlood')
const ALIFiltro = new db.crearDB('FLinks')
const block = new db.crearDB('palabras')
module.exports = async (client, message, channel) => {
    if (message.author.bot) return;

    const palabras = await block.obtener(`${message.guild.id}.palabras`)

    const palabras_block = new discord.MessageEmbed()
    .setTitle("Etherium Security | Filtro Anti-Invite")
    .setDescription(`${message.author} **No** tienes permitido enviár invitaciones de otros servidores.\n Puedes ser baneado por hacer esto!`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`ID : ${message.author.id}`)

    if (palabras && palabras.some(word => message.content.toLowerCase().includes(word))) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            await message.delete();
            return message.channel.send(palabras_block)
        }
    }

    // Anti Invites //

    if (!AIFiltro.tiene(`${message.guild.id}`, "activado")) return;

    var links = [
        "discord.gg",
        "discord.me",
        "discord.io",
        "discordapp.com/invite",
        "https://discord.gg/"
    ]

    const anti_Links = new discord.MessageEmbed()
        .setTitle("Etherium Security | Filtro Anti-Invite")
        .setDescription(`${message.author} **No** tienes permitido enviár invitaciones de otros servidores.\n Puedes ser baneado por hacer esto!`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`ID : ${message.author.id}`)

    if (AIFiltro.tiene(`${message.guild.id}`, "activado")) {
        if (links.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                await message.delete();
                return message.channel.send(anti_Links)
            }
        }
    }


    // Anti IPLogger's //

    if (!ALFiltro.tiene(`${message.guild.id}`, "activado")) return;

    var Loggers = [
        "https://iplogger.org/es/",
        "https://iplogger.org",
        "https://2no.co/",
        "https://iplogger.com/",
        "https://iplogger.ru/2UjWQ5.txt",
        "https://yip.su/",
        "https://iplogger.co/",
        "https://iplogger.info/",
        "https://ipgrabber.ru/",
        "https://ipgraber.ru/",
        "https://iplis.ru/",
        "https://02ip.ru/",
        "https://ezstat.ru/",
        "https://grabify.link/",
        "https://ouo.io",
        "https://goo.gl",
        "https://grabify.link/track",
        "https://my.su",
        "https://adfoc.us",
        "https://zzb.bz",
        "https://5.gp",
        "https://7.l>",
        "https://soo.gd",
        "https://bit.do",
        "https://bc.vc",
        "https://adf.ly",
        "https://shorte.st",
        "http://welcome-page-home.glitch.me/",
        "https://tiny.cc",
        "https://bit.ly",
        "https://ngrok.io"
    ]

    const ALFILTROS = new discord.MessageEmbed()
        .setTitle("Etherium Security | Filtro Anti-IPLoggers")
        .setDescription(`${message.author} Tén cuidado lo que envías, no se permiten IPLoggers\n Puedes ser baneado por enviar esto!`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`ID : ${message.author.id}`)

    if (ALFiltro.tiene(`${message.guild.id}`, "activado")) {
        if (Loggers.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                await message.delete()
                await message.channel.send(ALFILTROS)
            }
        }
    }


    // Anti Flood // 

    const spamdetector = require('dspamdetector')

    if (!AFFiltro.tiene(`${message.guild.id}`, "activado")) return;

    let opciones = {

        floodt: 5,
        floodml: 5
    }

    const flood = new discord.MessageEmbed()
        .setTitle("Etherium Security | Filtro Anti-Flood")
        .setDescription(`${message.author} Relajate!, no floodees.\n Puedes ser baneado por floodear`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`ID : ${message.author.id}`)

    let detector = new spamdetector.detector(opciones)

    if (AFFiltro.tiene(`${message.guild.id}`, "activado")) {
        detector.isFlood(message.author.id, message.guild.id, message.channel.id).then(resultado => {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                if (resultado === true) {
                    message.channel.send(flood).then(m => m.delete({
                        timeout: 5000
                    }))
                    message.channel.bulkDelete(5)
                }
            }
        })
    }


    const AntiLinks = new discord.MessageEmbed()
    .setTitle("Etherium Security | Filtro Anti-Links")
    .setDescription(`${message.author} No puedes enviar Links!\n Puedes ser baneado por esto!`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`ID : ${message.author.id}`)
    if (!ALIFiltro.tiene(`${message.guild.id}`, "activado")) return;

    function is_url(str) {
        let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if(regexp.test(str)){
            return true;
        }else {
            return false;
        }
    }

    if (ALIFiltro.tiene(`${message.guild.id}`, "activado")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            if(is_url(message.content) === true){
                await message.delete()
                await message.channel.send(AntiLinks)
            }
        }
    }

    if(message.channel.type === "dm"){
        const msgEmbed = new discord.MessageEmbed()
        .setTimestamp()
        .setAuthor(`💡 >> | Mensaje Directo`)
        .addField(`Enviado por:`, `<@${message.author.id}>`)
        .setDescription(`㊙️ >> | Aqui Llego Un Mensaje Por Md Al Bot`)
        .setColor("B40486")
        .setThumbnail(message.author.displayAvatarURL)
        .addField(`Mensaje: `, message.content)
        .setFooter(`Alerta MD`);

        client.channels.cache.get("771112209426284604").send({embed: msgEmbed})
    }

}