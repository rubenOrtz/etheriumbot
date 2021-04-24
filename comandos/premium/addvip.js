const discord = require('discord.js');
const db = require('megadb');
let vip = new db.crearDB('vip');

module.exports = {
    nombre: 'addvip',
    alias: [],
    desc: "Se le asignarán funciones VIP a los usuarios que se quiera",
    run: async(client, message, args) => {
        var id = [ "392904909231489024","634513106126766081", "310158154510106635", "615360256922484757", "804116460166578216"]

        if(!id.some(id => message.author.id == id)) return message.channel.send("\<a:ES_Rechazado:770788116231356496> **|** No tienes acceso a este comando.")
        let user = message.mentions.members.first();
        if(message.mentions.users.size < 1 || !user) return message.channel.send (" \<a:ES_Rechazado:770788116231356496> **|** __¡Debes mencionar a un usuario!__")
        if(user.bot)return message.channel.send("\<a:ES_Rechazado:770788116231356496> **|** __Un bot no puede ser registrado.__.");
        if(vip.has(user.id))return message.channel.send("\<a:ES_Rechazado:770788116231356496> **|** __**Este usuario ya esta registrado.**__")  
        vip.establecer(user.id, user.user.tag);
        message.channel.send(
            new discord.MessageEmbed()
            .setDescription("__"+user.user.tag+"__ **ha sido añadido a los usuarios VIP.**")
            .setColor("BLACK")
        )
    }
}