const discord = require("discord.js");
module.exports = {
    nombre: "pause",
    alias: ["Pausa"],
    desc: "Pausá la canción que estás escuchando",
    run: async(client, message, args) => {
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

        const pausa = new discord.MessageEmbed()
            .setTitle("Etherium Security | Music")
            .setColor("RED")
            .setDescription(`⏸ | ${message.author} ha pasuado la canción!`)
            .setFooter("Etherium Security | Muisc");
        const player = message.client.manager.get(message.guild.id);
        if (!player) return message.reply(SyntaxE2);

        const { channel } = message.member.voice;

        if (!channel) return message.reply(SyntaxE);
        if (channel.id !== player.voiceChannel) return message.reply(SyntaxE);
        if (player.paused) return message.reply("Ya estaba pausada la música");

        player.pause(true);
        return message.reply(pausa);
    },
};