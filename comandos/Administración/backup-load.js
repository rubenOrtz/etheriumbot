const backup = require("discord-backup");
const discord = require('discord.js');
const db = require('megadb')
module.exports = {
    nombre: 'b-cargar',
    alias: [],
    desc: "Podrás cargár el backup que mas te guste.",
    run: async(client, message, args) => {

        let vips = new db.crearDB('vip')

        const SyntaxA = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `backup-load`" + "__`<Backup-ID>`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        if(!vips.has(message.author.id))
        return message.channel.send(
            new discord.MessageEmbed()
            .setTitle("<a:ES_verified:770984597437022220> **|** Función Premium **|** <a:ES_verified:770984597437022220>")
            .setDescription("<a:ES_Boost:770788090738245674> **|** `Estás intetando utilizar una función premium!` \n\n <a:ES_Boost:770788090738245674> **|** `Si quieres utilizar esta función deberás ingresar al discord \n de soporte y solicitar VIP`  \n \n <a:ES_Boost:770788090738245674> **|** `Las funciones premium tienen un valór de $1.50 USD!`")
            .setColor("BLACK")
            .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            .setTimestamp()
        )

        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send(":x: | Debés tenér permisos de administrador para podér usar esta función.");
        }
        let backupID = args[0];
        if(!backupID){
            return message.channel.send(SyntaxA);
        }
        backup.fetch(backupID).then(async () => {
            message.channel.send("⚠️ | Cuando el backUp sea cargado **TODOS** los canales > roles > mensajes > etc serán reemplazados!. `Reacciona con` ✅ `Para confirmar`").then(m => {
                m.react("✅")
                const filtro = (reaction, user) => {
                    return ["✅"].includes(reaction.emoji.name) && user.id == message.author.id;
                }

                m.awaitReactions(filtro, {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch(() =>{
                    m.edit(":x: | El backUp fue cancelado!, tardaste demasiado.");
                }).then(coleccionado => {
                    const reaccion = coleccionado.first();
                    if(reaccion.emoji.name === "✅"){
                        message.author.send(":white_check_mark: | Comenzando a cargar el Backup!");
                        backup.load(backupID, message.guild).then(() => {
                        }).catch((err) => {
                            return message.channel.send(":x: | Perdón, algo salió mal, fijese si tengo permisos de administrador para utilizar esta función!");
                        })
                    }
                })
            })
        })
    }
}