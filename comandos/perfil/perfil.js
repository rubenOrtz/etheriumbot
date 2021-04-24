const discord = require('discord.js')
const db = require('megadb')
const profile = new db.crearDB("profile");
const prefix_db = new db.crearDB('prefix')
const vip_coin = new db.crearDB('vipcoin')
module.exports = {
    nombre: 'perfil',
    alias: ["profile"],
    desc: "Mostrará el perfil de un usuario",
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.member;
        const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";

        if(!profile.has(`${user.id}`)){
            return message.channel.send("¡Este usuario no tiene perfil, dile que se cree uno con" + "`" + `${prefix}crear-perfil` + "`")
        }

        let descripción = await profile.obtener(`${user.id}.desc`)
        let titulo = await profile.obtener(`${user.id}.titulo`)
        let colors = await profile.obtener(`${user.id}.color`)
        let edad = await profile.obtener(`${user.id}.edad`)
        let sexo = await profile.obtener(`${user.id}.sexo`)
        let role = await profile.obtener(`${user.id}.rol`)
        let coins = await vip_coin.obtener(`${user.id}.coins`)

        let perfil = new discord.MessageEmbed()
        .setColor(colors)
        .setAuthor(user.user.username, user.user.displayAvatarURL({dynamic: true}))
        .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
        .setTitle(titulo)
        .setDescription("📨 **Descripción**\n" + descripción)
        .addFields(
            { name: '\u200B', value: '\u200B' },
            {name:"Sexo", value: sexo, inline: true},
            {name:"Edad", value: edad, inline: true},
            { name: '\u200B', value: '\u200B' },
            {name:"Etherium Coins", value: coins, inline: true},
            {name:"Rol", value: role, inline: true}
        )

        /*.addField("Premium Coin's", "🪙 "+ coins)
        .addField("<a:Es_soporte:771998097499750420> Rol", role, inline true)*/

        message.channel.send({embed: perfil})
    }
}