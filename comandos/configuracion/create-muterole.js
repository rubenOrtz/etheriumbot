const discord = require('discord.js')
const db = require('megadb')
let prefix_db = new db.crearDB('prefix')
module.exports = {
    nombre: 'crear-muterole',
    alias: ["create-muterole"],
    desc: "Crea rol mute",
    run: async(client, message, args) => {
        const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
        message.guild.roles.create({data: {
            name: 'Muteado',
            permissions: []
        }})

        const msgEmbed = new discord.MessageEmbed()
        .setTitle("Etherium Security | Mute-Role")
        .setDescription("¡El rol de mute fue creado!" + "`" + `\n Utilizá ${prefix}set-mute *<Rol>*` + "`" + "\n\n ¡Recuerda que debes quitarle los permisos de hablar en todos los canales al rol!")
        .setFooter("Etherium Security | VIP","https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
        .setColor("BLUE")
        message.channel.send({embed: msgEmbed})

    }
}