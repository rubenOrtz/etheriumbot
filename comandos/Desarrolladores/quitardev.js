const discord = require('discord.js')
const db = require('megadb')
let devs = new db.crearDB('developers')
module.exports = {
    nombre: 'devremove',
    alias: [],
    desc: "Quitarás una developer de la lista!",
    run: async(client, message, args) => {
        if(!devs.has(message.author.id)) return

        let sujeto = message.mentions.members.first();

        if(!devs.tiene(`${sujeto.id}`)) return message.reply("Ese usuario no esta en la lista.")
        devs.eliminar(`${sujeto.id}`)
        return message.channel.send(sujeto+" ha sido eliminado de la lista.");
    }
}