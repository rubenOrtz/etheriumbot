const discord = require('discord.js')
module.exports = {
    nombre: 'ban',
    alias: ["banear"],
    desc: "Podrás expulsar permanentemente al usuario que menciones",
    run: (client, message, args) => {
        let reason = args.join(" ").slice(22);
        
        var member = message.mentions.members.first() || message.guild.roles.resolve(args[0]);
        var perms = message.member.hasPermission("ADMINISTRATOR");

        const SyntaxM = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `ban`" + "__`<Mencion/ID>`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxB = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`No puedo banear a este usuario`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxP = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`No tienes permisos para utilizar este comando`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        if(!perms) return message.channel.send(SyntaxP)
        if(!member) return message.channel.send(SyntaxM)
        if(!message.guild.member(member).bannable){
            return message.channel.send(SyntaxB);
        }

        const msgEmbed = new discord.MessageEmbed()
            .setThumbnail(member.user.avatarURL)
            .setAuthor("SpaceBot", client.user.avatarURL)
            .setTitle(":mute: ¡Has sido baneado! :mute:")
            .setDescription(":point_right: **>> | Has recibido un baneo proveniente de** " +message.guild.name)
            .setColor("BLACK")
            .addField("Personal Responsable:", message.author.tag)
            .addField("Motivo:", `${reason ? reason : "Ninguna."}`)
            .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            .setTimestamp()
        member.ban().then((member) => {
            member.send(msgEmbed);
            message.channel.send(":information_source: `|` El usuario __**" + member.displayName + "**__ ha sido baneado correctamente.")
        })
    }
}