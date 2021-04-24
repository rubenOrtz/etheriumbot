const discord = require('discord.js')
const db = require('megadb')
let forceadd = new db.crearDB('Ids')

module.exports = {
    nombre: 'forceadd',
    alias: [],
    desc: "Añadirá un usuario a una ListaNegra",
    run: async(client, message, args) => {
        if(!forceadd.tiene("ids")) {
            forceadd.establecer("ids", [])
        }

        const user = message.member;

        const staff = new db.crearDB('staff');
        if(!staff.has(message.author.id)) return;

        forceadd.push("ids", args[0]);
        
        let canal = client.channels.cache.get("781254398352293898")

        let razon = args.join(" ");

        if(!razon){
            return message.channel.send(
                new discord.MessageEmbed()
                .setColor("RED")
                .setDescription("¡Debés colocar una razón!")
            )
        }
        const log = new discord.MessageEmbed()
        .setAuthor("⚠️ | Forceban Add")
        .setColor("RED")
        .setDescription(`Un staff acaba de añadir a un usuario a la lista negra`)
        .addField("Staff:", user.user.tag)
        .addField("ID Raider:", args[0])
        .addField("Usuario:", `<@${args[0]}>`)
        .addField("Estado Actual:",":white_check_mark: **|** Usuario agregado a la base de datos");


        const msgEmbed = new discord.MessageEmbed()
        .setAuthor("⚠️ | Forceban Add")
        .setColor("RED")
        .setDescription(`Un nuevo usuario ha sido añadido a mi base de datos.`)
        .addField("ID Raider:", args[0])
        .addField("Usuario:", `<@${args[0]}>`)
        .addField("Estado Actual:",":white_check_mark: **|** Usuario agregado a la base de datos");
        message.channel.send({embed: msgEmbed})
        canal.send(log)
    }
}