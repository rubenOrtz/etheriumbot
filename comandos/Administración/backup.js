const discord = require('discord.js');
const discordBackup = require('discord-backup')
const db = require('megadb')
const prefix_db = new db.crearDB('prefix')
module.exports = {
    nombre: 'backup',
    alias: [],
    desc: "Crearas un BackUp del discord que mas gustes.",
    run: async(client, message, args) => {

        let vips = new db.crearDB('vip')
        const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
        
        if(!vips.has(message.author.id))
        return message.channel.send(
            new discord.MessageEmbed()
            .setTitle("<a:ES_verified:770984597437022220> **|** Función Premium **|** <a:ES_verified:770984597437022220>")
            .setDescription("<a:ES_Boost:770788090738245674> **|** `Estás intetando utilizar una función premium!` \n\n <a:ES_Boost:770788090738245674> **|** `Si quieres utilizar esta función deberás ingresar al discord \n de soporte y solicitar VIP`  \n \n <a:ES_Boost:770788090738245674> **|** `Las funciones premium tienen un valór de $1.50 USD!`")
            .setColor("BLACK")
            .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            .setTimestamp()
        )

        const embed = new discord.MessageEmbed()
    
        .setTitle('**Información sobre las copias de seguridad**')
        .addField(`${prefix}b-crear <a:ES_verified:770984597437022220>`, '**Crea una copia de seguridad de TODO el servidor**')
        .addField(`${prefix}b-cargar [ID] <a:ES_verified:770984597437022220>`, '**Carga una copia de seguridad a un servidor**')
        .addField(`${prefix}b-eliminar[ID] <a:ES_verified:770984597437022220>`, '**Elimina una copia de seguridad**')
        .setColor("BLACK")
        .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
        .setTimestamp()
        message.channel.send(embed)
    }
}