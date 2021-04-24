const backup = require("discord-backup");
const discord= require('discord.js')
const db = require('megadb')
module.exports = {
    nombre: 'b-crear',
    alias: [],
    desc: "Crearás una ID de BackUp",
    run: async(client, message, args) => {

        let vips = new db.crearDB('vip')

        if(!vips.has(message.author.id))
        return message.channel.send(
            new discord.MessageEmbed()
            .setTitle("<a:ES_verified:770984597437022220> **|** Función Premium **|** <a:ES_verified:770984597437022220>	")
            .setDescription("<a:ES_Boost:770788090738245674> **|** `Estás intetando utilizar una función premium!` \n\n <a:ES_Boost:770788090738245674> **|** `Si quieres utilizar esta función deberás ingresar al discord \n de soporte y solicitar VIP`  \n \n <a:ES_Boost:770788090738245674> **|** `Las funciones premium tienen un valór de $1.50 USD!`")
            .setColor("BLACK")
        )

        // Check member permissions
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send(":x:*** | Tienes que tener el permiso `ADMINISTRATOR` para crear copias de seguridad!***");
        }
        // Create the backup
        backup.create(message.guild, {
            maxMessagesPerChannel: 0,
            jsonSave: true,
            jsonBeautify: true,
            saveImages: "base64"
        }).then((backupData) => {
            message.author.send(
                new discord.MessageEmbed()
               .setAuthor(`🔒 ¡Backup creado con éxito! 🔒`)
                .setColor("BLACK")
                .setDescription(`**Para cargár el Backup utiliza -> $b-cargar [ID-Backup] ${backupData.id}**`)
                .setThumbnail(message.author.displayAvatarURL())
                .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
                )
              message.channel.send(//backupData.id
                new discord.MessageEmbed()
                .setAuthor(`🔒 ¡Backup creado con éxito! 🔒`)
                .setColor("BLACK")
                .setThumbnail(message.author.displayAvatarURL())
                .setDescription("**La ID del BackUp fue enviada a tu MD!**")
                .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
              );

            /*message.author.send("La copia de seguridad fue creada! Para usarla, escribe este comando en el servidor que quieras: `"+"$cargar-backup "+backupData.id+"`!");
            message.channel.send(":white_check_mark: Copia de seguridad creada. La ID fue enviada a tus mensajes!");*/
        });

        backup.setStorageFolder(__dirname+"/backups/");{
            await backup.create(message.guild);
        }
    }
}