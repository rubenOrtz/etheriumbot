const discord = require('discord.js')
const db = require('megadb')
const prefix_db = new db.crearDB('prefix')
module.exports = {
    nombre: 'reportar',
    alias: [`soporte`],
    desc: "Enviará un mensaje al equipo de soporte!",
    run: async(client, message, args) => {

     let prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "sb/";

        if(args[0] == "help") {
            let helpmb = new discord.MessageEmbed()
            .setColor("BLACK")
            .addField("Comando de contacto", `uso: ${prefix}contactar <reason>`)

            message.channel.send({embed: helpmb});
            return;
        }

        message.delete()

        let Invite = await message.guild.channels.cache.find(c => c.type === "text").createInvite();
        let Sender = message.author;
        const sayMessage = args.join(" ");
        if(!sayMessage)
            return message.channel
            .send("Acompañe el comando con una razón para solicitar soporte.").then(msg => msg.delete({timeout: 6000}));
        let contact = new discord.MessageEmbed()
        .setColor("00ff00")
        .setThumbnail(Sender.displayAvatarURL)
        .setDescription(
          `Mensaje Contactado Desde [${message.guild.name}](${Invite.url})`
        )
        .setTitle("Mensaje Contacto")
        .addField("Usuario", Sender, true)
        .addField("Usuario ID: ", Sender.id, true)
        .addField("Mensaje: ", sayMessage)
        .setTimestamp();
        client.channels.cache.get("770380220149661726").send(contact);
        

        let msgEmbed = new discord.MessageEmbed()
        .setColor("#00ff00")
        .setTitle("Mensaje Enviado!")
        .setDescription("Tu Mensaje Ha Sido Enviado Correctamente")
        .addField("Requerido Por ", Sender)
        .addField("Mensaje ", sayMessage)
        .setFooter("Gracias Por contactarse con Etherium Security" , "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif");
  
      message.channel.send({embed: msgEmbed}).then(msg => {msg.delete({timeout: 10000})});
    }
}