const discord = require('discord.js')
const db = require('megadb')
const muterol_db = new db.crearDB('server_rolemute')
module.exports = {
    nombre: 'set-muterole',
    alias: [],
    desc: "Setea el rol de mute",
    run: async(client, message, args) => {

        let permisos = message.member.hasPermission("ADMINISTRATOR")
        let role = message.mentions.roles.first() || message.guild.roles.resolve(args[0]);

        const perms = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(message.author.tag)
        .setDescription("`No` tienes permisos para utilizar este comando!")
        .setTimestamp()
        .setFooter("Etherium Security")

        const Syntax = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `set-muterole` __`<Rol>`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        if(!permisos){
            message.channel.send(perms)
        }
        if(!role){
            message.channel.send(Syntax)
        }

        const establecido = new discord.MessageEmbed()
        .setTitle("Mute Role actualizado")
        .setDescription(`Rol : <@&${role.id}>`)
        .setTimestamp()
        .setFooter(`Role ID : ${role.id}`)

        muterol_db.establecer(`${message.guild.id}`, `${role.id}`);
        message.channel.send(establecido)
        

    }
}