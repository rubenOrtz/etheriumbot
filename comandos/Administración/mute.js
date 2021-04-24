const discord = require('discord.js')
const db = require('megadb')
const db_muterole = new db.crearDB('server_rolemute')
module.exports = {
    nombre: 'mute',
    alias: [],
    desc: "Mutea a un usuario",
    run: async (client, message, args) => {

        let permiso = message.member.hasPermission("MANAGE_GUILD");
        let mencionado = message.mentions.members.first() || message.guild.members.resolve(args[0]);

        const perms = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(message.author.tag)
            .setDescription("`No` tienes permisos para utilizar este comando!")
            .setTimestamp()
            .setFooter("Etherium Security")
        if(!permiso){
            return message.channel.send(perms)
        }
        const mencion = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(message.author.tag)
            .setDescription("Debes mencionar al usuario para mutearlo!")
            .setTimestamp()
            .setFooter("Etherium Security")

        if(!mencionado){
            return message.channel.send(mencion)
        }
        const rolmuteno = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(message.author.tag)
            .setDescription("¡No hay ningún rol de mute seleccionado!")
            .setTimestamp()
            .setFooter("Etherium Security")
        const tienemute = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(message.author.tag)
            .setDescription("Este usuario ya está muteado")
            .setTimestamp()
            .setFooter("Etherium Security")

        if (!db_muterole.tiene(message.guild.id)) {
            return message.channel.send(
                rolmuteno
            )
        }

        let rol = await db_muterole.obtener(message.guild.id)

        if (mencionado.roles.cache.has(rol)) {
            message.channel.send(tienemute)
        }

        mencionado.roles.add(rol)
        const embedmute = new discord.MessageEmbed()
            .setTitle(`Etherium Security | Mute`)
            .addField(`Moderador:`, `${message.author.username}`)
            .addField(`Miembro:`, `${mencionado}`)

            message.channel.send(embedmute)
    }
}