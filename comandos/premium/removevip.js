const discord = require('discord.js')
const db = require('megadb')
const vip = new db.crearDB('vip')
module.exports = {
    nombre: 'removevip',
    alias: [],
    desc: "Se le quitará el VIP al usuario que se taggee",
    run: async(client, message, args) => {
        const devs = new db.crearDB('developers')
        if(!devs.has(message.author.id)) return;

        let user = message.mentions.members.first() || message.guild.members.resolve(args[0]);
        if(!user) return message.channel.send("\<a:ES_Rechazado:770788116231356496> **|** __¡Debes mencionar a un usuario!__");
        if(!vip.tiene(`${user.id}`)) return message.reply("\<a:ES_Rechazado:770788116231356496> **|** __**Este usuario no esta en la lista.**__")
        vip.eliminar(`${user.id}`)
        return message.channel.send(
            new discord.MessageEmbed()
            .setDescription("__"+user.user.tag+"__ **ha sido eliminado de los usuarios VIP.**")
            .setColor("BLACK")
)
    }
}