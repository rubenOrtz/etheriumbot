const discord = require('discord.js')
const db = require('megadb')
const block = new db.crearDB('palabras')

module.exports = {
    nombre: 'bloquear',
    alias: ["block"],
    desc: "Puedes bloquear las palabras que no quieras que nombren en tu servidor",
    run: async(client, message, args) => {
        if(!args[0]) return;


        if(args[0] === 'palabra'){
            const palabra = args[1]
            if(!block.tiene(`${message.guild.id}`)){
                block.establecer(`${message.guild.id}.palabra []`)
            }

            block.push(`${message.guild.id}`,{palabra: `${palabra}`})
            message.channel.send(`Ha sido añadida la palabra \`${palabra}\` a mi base de datos! `)
        }
    }
}