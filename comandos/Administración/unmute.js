const discord = require('discord.js')
const db = require('megadb')
const db_muterole = new db.crearDB('server_rolemute')
module.exports = {
    nombre: 'unmute',
    alias: [],
    desc: "Desmutea a un usuario",
    run: async (client, message, args) => {
        let permiso = message.member.hasPermission("MANAGE_GUILD");
        let mencionado = message.mentions.members.first() || message.guild.roles.resolve(args[0]);

        const SyntaxM = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `Unmute`" + "__`<ID>`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxE = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`No tienes permisos para utilizar este comando`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        if(!mencionado){
            return message.channel.send(SyntaxM)
        }
        if(!permiso){
            return message.channel.send(SyntaxE)
        }

        let rol = await db_muterole.obtener(message.guild.id)

        const rolmuteno = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(message.author.tag)
        .setDescription("¡El usuario no está muteado!")
        .setTimestamp()
        .setFooter("Etherium Security")
        const rolmutefinish = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(message.author.tag)
        .setDescription(`¡El usuario ${mencionado} fue desmuteado`)
        .setTimestamp()
        .setFooter("Etherium Security")

        if (!mencionado.roles.cache.has(rol)) {
            message.channel.send(rolmuteno)
        }

        if (mencionado.roles.cache.has(rol)) {
            mencionado.roles.remove(rol)
            message.channel.send(rolmutefinish)
        }

    }
}