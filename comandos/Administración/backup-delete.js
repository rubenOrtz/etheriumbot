const backup = require('discord-backup');
const discord = require('discord.js');
const db = require('megadb')
module.exports = {
    nombre: 'b-borrar',
    alias: [],
    desc: "Podrás eliminar el Backup que quieras!",
    run: async(client, message, args) => {

        const SyntaxA = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `backup-delete`" + "__`<Backup-ID>`__")
        .setTimestamp()
        .setFooter("Etherium Security")

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
            return message.channel.send(":x: | Tienes que tener permisos de administrador para poder elimar copias de seguridad!");
        }
        let backupID = args[0];
        if(!backupID){
            return message.channel.send(SyntaxA);
        }else if(backupID){
            backup.remove(backupID) + message.channel.send(`Copia de seguridad eliminada: ${backupID}`)
        }
    }
}