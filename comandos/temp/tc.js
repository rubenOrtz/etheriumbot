const discord = require('discord.js')
const db = require('megadb')
const tc = new db.crearDB('tc')

module.exports = {
    nombre: 'tc',
    alias: ["canaltemporal"],
    desc: "Comandos para canales temporales",
    run: async (client, message, args) => {
        if (!args) return;

        /* Embeds */

        const creado = new discord.MessageEmbed()
            .setTitle("Etherium Security | Canal temporal")
            .setDescription("¡Tu canal temporal fue creado con éxito!")
            .setColor("GREEN")

        const error = new discord.MessageEmbed()
            .setTitle("Etherium Security | Canal temporal")
            .setDescription("¡Ya tienes un canal creado en este servidor!")
            .setColor("RED")

        const categ = await tc.obtener(`${message.guild.id}.cat`)

        if (args[0] === 'crear') {

            const nombre = message.author.username;

            await message.channel.send(creado)
            await message.react("✅")
            await message.guild.channels.create(`Canal temporal de ${nombre}`, {
                type: "voice"
            }).then((channel) => {
                channel.setParent(categ)
            }).catch (e => (error) => {
                console.error(error)
            })
        }

        const SyntaxError = new discord.MessageEmbed()
        .setTitle("Etherium Security | Canal temporal")
        .setDescription("SyntaxError: `tc set` **<ID>** \n¡Asegurate de haber colocado bien la ID de la categoría!")
        .setColor("RED")

        const catergoria = new discord.MessageEmbed()
        .setTitle("Etherium Security | Canal Temportal")
        .setDescription("¡Has seleccionado la categoría!")
        .setColor("GREEN")

        if(args[0] === 'set'){
            if(isNaN (args[1])){
                return message.channel.send(SyntaxError)
            }

            if(!isNaN(args[1])){
                tc.establecer(`${message.guild.id}`, {
                    cat: `${args[1]}`
                })
                message.channel.send(catergoria)
            }

        }

        if(args[0] === 'test'){
            message.channel.send(categ)
        }

    }
}