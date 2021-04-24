const discord = require('discord.js');
module.exports = {
    nombre: 'kick',
    alias: ["Expulsar"],
    desc: "Expulsaras al usuario que creas!",
    run: (client, message, args) => {

        const SyntaxM = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `Kick`" + "__`<Mencion/ID>`__")
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
        .setDescription("Error:" + "__`No puedo kickear a este usuario`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        let user = message.mentions.members.first()||message.guild.roles.resolve(args[0]);
        let razon = args.slice(1).join(" ");
        let perms = message.member.hasPermission("KICK_MEMBERS");

        if(!perms){
            return message.channel.send(SyntaxE)
        }

        if(!user) {
            return message
            .reply(SyntaxM)
            .catch(console.error);
        }
        if(!message.guild.member(user).bannable){
            return message.reply(SyntaxE2);
        }

        message.guild.member(user).kick(razon);
        message.channel.send(
            new discord.MessageEmbed()
            .setTitle("⛔ MOD ACTION ⛔ ")
            .addField("👥 Usuario:", user)
            .addField("🔧 Moderador:", message.author.username)
            .addField("💊 Razón:", razon)
            .setColor("BLACK")
            .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            .setTimestamp()
        );
        const kk = new discord.MessageEmbed()
      .setTitle("🔨**| Fuiste Kickeado!**")
      .setDescription(
        "🔮 | Lamentablemente fuiste kickeado De " +
          message.guild.name
      )
      .addField("👥 Staff:", message.author.username)
      .addField("⚠️ Razón:", razon)
      .setColor("BLACK")
      .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
      .setTimestamp();
    message.guild.member(user.id).send(kk);
    }
}