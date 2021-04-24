const discord = require('discord.js')
const db = require('megadb')
const profile = new db.crearDB('profile')
const prefix_db = new db.crearDB('prefix')
module.exports = {
    nombre: 'config-edad',
    alias: [],
    desc: "Configúra tu edad",
    run: async(client, message, args) => {
        let user = message.member;
        const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
        if(!profile.tiene(`${user.id}`)){
            return message.channel.send(
                new discord.MessageEmbed()
                .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
                .setTitle("Etherium Security | Perfil")
                .setDescription("Debés crearte un perfil antes de configurarlo!\n\n"+ "`" + `${prefix}crear-perfil` + "`")
                .setColor("RED")
                .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")    
            )
        }

        if(isNaN(args[0])){
            return message.channel.send(
                new  discord.MessageEmbed()
                .setTitle("Etherium Security | Perfil")
                .setColor("RED")
                .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
                .setTimestamp()
                .setFooter("Etherium Security")
                .setDescription("¡Solo puedes colocar números!")
            )
        }

        if(args[0] < 12){
            return message.channel.send(
                new  discord.MessageEmbed()
                .setTitle("Etherium Security | Perfil")
                .setColor("RED")
                .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
                .setTimestamp()
                .setFooter("Etherium Security")
                .setDescription("¡Debés tener una edad mayor a 12 años!")
            )
        }

        if(!isNaN(args[0])){

            profile.establecer(`${user.id}.edad`, args[0])

            message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Security | Perfil")
                .setColor("GREEN")
                .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
                .setTimestamp()
                .setFooter("Etherium Security")
                .setDescription("Perfecto!, has modificado tu edad.")
            )
        }
    }
}