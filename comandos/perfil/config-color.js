const discord = require('discord.js')
const db = require('megadb')
const profile = new db.crearDB('profile')
const prefix_db = new db.crearDB('prefix')
module.exports = {
    nombre: 'config-color',
    alias: [],
    desc: "Modifica el color que gustes a tu Embed!",
    run: async(client, message, args) => {
        const user = message.member; 
        const color = await profile.obtener(`${user.id}.color`);
        const caracter = "#";

        const texto = args.join(" ");

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

        if(!texto){
            return message.channel.send(
                new discord.MessageEmbed()
                .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
                .setTitle("Etherium Security | Perfil")
                .setDescription("Modo de uso : `<prefix>config-color #<CodigoHEX>` \n\n **>** [Colores](https://htmlcolorcodes.com/es/) **<**")
                .setColor("RED")
                .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            )
        }

        profile.establecer(`${user.id}.color`, texto)
        
        const descripción = new discord.MessageEmbed()
        .setTitle("Etherium Security | Perfil")
        .setColor("BLACK")
        .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
        .setDescription("Has cambiado tu color a : \n`" + texto + "`")
        .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
        .setTimestamp()
        message.channel.send({embed: descripción})

    }
}