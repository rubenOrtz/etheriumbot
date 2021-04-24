const discord = require('discord.js')
module.exports = {
    nombre: 'hackban',
    alias: [],
    desc: "Podrás banear a un usuario por ID",
    run: async(client, message, args) => {

        const SyntaxM = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `hackban`" + "__`<ID>`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxE = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`No tienes permisos para utilizar este comando`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxE2 = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`La ID es inválida`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        if(!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send(SyntaxE)

        let userID = args[0];
        let reason = args.slice(1).join(" ");

        if(!userID)
        return message.channel.send(SyntaxM)
        if(isNaN(userID))
        return message.channel.send(SyntaxE2)

        if(userID === message.author.id)
        return message.channel.send(
            new discord.MessageEmbed()
            .setTitle("Etherium Security | HackBan")
            .setColor("RED")
            .setDescription("<a:ES_Rechazado:770788116231356496> **|** ¡No puedes banearte a ti mismo!")
            .setFooter("Etherium Security | HackBan", 'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
            .setTimestamp()
        )

        if(userID === client.user.id)
        return message.channel.send(
            new discord.MessageEmbed()
            .setTitle("Etherium Security | HackBan")
            .setColor("RED")
            .setDescription("<a:ES_Rechazado:770788116231356496> **|** ¿por que me quieres banear? no puedes hacer eso!")
            .setFooter("Etherium Security | HackBan", 'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
            .setTimestamp()
        )

        client.users.fetch(userID).then(async user => {
            await message.guild.members.ban(user.id, {reason: reason});
            return message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Security | HackBan")
                .setColor("BLUE")
                .setDescription("<a:ES_Notificaciones:771113036957745213> **|** "+`**${user.tag}** fue baneado del servidor!`)
                .setFooter("Etherium Security | HackBan", 'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setTimestamp()
            )
        }).catch(error => {
            return message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Security | HackBan")
                .setColor("RED")
                .setDescription("<a:ES_Rechazado:770788116231356496> **|** "+`Ocurrió un error, **${error}**`)
                .setFooter("Etherium Security | HackBan", 'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setTimestamp()
            )
        })
    }
}