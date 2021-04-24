const discord = require('discord.js')
module.exports = {
    nombre: 'clear',
    alias: ['limpiar', 'depurar'],
    descripción: "Limpiarás hasta 100 mensajes en un mismo canal!",
    run: (client, message, args) => {

      const SyntaxA = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Etherium Security")
      .setDescription("Syntax Error: `clear`" + "__`<Mensajes>`__")
      .setTimestamp()
      .setFooter("Etherium Security")
      const SyntaxP = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Etherium Security")
      .setDescription("Error:" + "__`No tienes permisos para utilizar este comando`__")
      .setTimestamp()
      .setFooter("Etherium Security")
      const SyntaxE = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Etherium Security")
      .setDescription("Error:" + "__`Solo puedes colocar Números`__")
      .setTimestamp()
      .setFooter("Etherium Security")
      const SyntaxE2 = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Etherium Security")
      .setDescription("Error:" + "__`El valor es inválido`__")
      .setTimestamp()
      .setFooter("Etherium Security")

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(SyntaxP)
      if(!args[0]) return message.channel.send(SyntaxA)
      let number = args[0]
      if(isNaN(number)) return message.channel.send(SyntaxE)
      number = parseInt(number)
      if(number >= 100 || number < 0 ) return message.channel.send(SyntaxE2)
      message.channel.bulkDelete(number + 1 ).then( () => {
          message.channel.send(`**Se elimino ${number} mensajes.**`)
      }).catch(error => {
        message.channel.send(`Ocurrio un error: ${error.message}`)
      })
    }
}