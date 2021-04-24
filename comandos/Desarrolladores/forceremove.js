const discord = require('discord.js')
const db = require('megadb')
module.exports = {
    nombre: 'forceremove',
    alias: [],
    desc: "Quitarás un usuario de la BlackList",
    run: async(client, message, args) => {
        let forceRemove = new db.crearDB("Ids");
        const devs = new db.crearDB("developers")

        if(!devs.has(message.author.id)) return;

        if(!forceRemove.tiene("ids")) {
            forceRemove.establecer("ids", []);
        }

        forceRemove.extract("ids", args[0]);

        const msgEmbed = new discord.MessageEmbed()
        .setAuthor("⚠️ | Forceban Remove")
        .setColor("RED")
        .setDescription(`Un viejo usuario fue removido de mi base de datos`)
        .addField("ID Raider:", args[0])
        .addField("Usuario:", `<@${args[0]}>`)
        .addField("Estado Actual:",":white_check_mark: **|** Usuario removido a la base de datos")
        .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
        .setTimestamp()

        message.channel.send({embed: msgEmbed})


    }
}