const discord = require('discord.js');
module.exports = {
    nombre: "unban",
    alias: ["Unbanear"],
    desc: "Podrás desbanear a cualquier usuario que gustes",
    run: (client, message, args) => {

        const SyntaxM = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `Unban`" + "__`<ID>`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxE = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`No tienes permisos para utilizar este comando`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        if(!args[0]) return message.channel.send(SyntaxM)
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(SyntaxE)
        let userID = args[0];
        message.guild.members.unban(userID).then(user => {
            message.channel.send(
                new discord.MessageEmbed()
                .setTitle("MOD ACTION (UNBAN)")
                .setThumbnail(client.user.avatarURL)
                .addField("Usuario:", user)
                .addField("Moderador:", message.author.username)
                .setFooter("Etherium Security | Unban", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")   
            )
        })
    }
}