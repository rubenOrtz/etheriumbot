const discord = require("discord.js");
module.exports = {
    nombre: "volume",
    alias: ["vol", "volumen"],
    desc: "Sube o baja el volúmen",
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
        const SyntaxE3 = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("Etherium Security")
            .setDescription("Error:" + "__`Debes colocar solo números`__")
            .setTimestamp()
            .setFooter("Etherium Security");
        const SyntaxE4 = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("Etherium Security")
            .setDescription("Error:" + "__`Solo números del 0 al 100`__")
            .setTimestamp()
            .setFooter("Etherium Security");

        const canal = new discord.MessageEmbed()
            .setTitle("Etherium Security | Music")
            .setColor("RED")
            .setDescription("¡Necesitas unirte al canal de voz!")
            .setFooter("Etherium Security | Muisc");

        const player = message.client.manager.get(message.guild.id);

        if (!player) return message.reply(SyntaxE);
        if (!args.length)
            return message.reply(`El volumen es: \`${player.volume}\`.`);

        const { channel } = message.member.voice;

        if (!channel) return message.reply(SyntaxE);
        if (channel.id !== player.voiceChannel) return message.reply(SyntaxE);

        const volume = Number(args[0]);

        if (!volume || volume < 1 || volume > 100) return message.reply(SyntaxE4);

        player.setVolume(volume);
        return message.reply(`El volumen se colocó a \`${volume}\`.`);
    },
};