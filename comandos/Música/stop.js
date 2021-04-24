const discord = require("discord.js");
module.exports = {
    nombre: "stop",
    alias: [],
    desc: "Pará la canción que estas escuchando",
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

        const canal = new discord.MessageEmbed()
            .setTitle("Etherium Security | Music")
            .setColor("RED")
            .setDescription("¡Necesitas unirte al canal de voz!")
            .setFooter("Etherium Security | Muisc");

        const stoped = new discord.MessageEmbed()
            .setTitle("Etherium Security | Music")
            .setColor("GREEN")
            .setDescription(`${message.author} ha frenado y eliminado la playlist`)
            .setFooter("Etherium Security | Muisc");
        const player = message.client.manager.get(message.guild.id);
        if (!player) return message.reply(SyntaxE2);

        const { channel } = message.member.voice;

        if (!channel) return message.reply(canal);
        if (channel.id !== player.voiceChannel) return message.reply(SyntaxE);

        player.destroy();
        return message.reply(stoped);
    },
};