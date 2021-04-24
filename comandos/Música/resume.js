const discord = require("discord.js");
module.exports = {
    nombre: "resume",
    alias: ["Resumir"],
    desc: "Podrás volvér a colocar la canción que pausaste",
    run: async(client, message, args) => {
        const SyntaxA = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("Etherium Security")
            .setDescription("Syntax Error: `covid`" + "__`<Pais>`__")
            .setTimestamp()
            .setFooter("Etherium Security");
        const SyntaxE = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("Etherium Security")
            .setDescription("Error:" + "__`Debés estar en un canal de voz`__")
            .setTimestamp()
            .setFooter("Etherium Security");
        const SyntaxE2 = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("Etherium Security")
            .setDescription("Error:" + "__`No hay ningúna canción reproduciendose`__")
            .setTimestamp()
            .setFooter("Etherium Security");

        const player = message.client.manager.get(message.guild.id);
        if (!player) return message.reply(SyntaxE2);

        const { channel } = message.member.voice;

        if (!channel) return message.reply(SyntaxE);
        if (channel.id !== player.voiceChannel) return message.reply(SyntaxE);
        if (!player.paused) return message.reply("La canción ya está en curso");

        player.pause(false);
        return message.reply("La canción se reanudo.");
        s;
    },
};