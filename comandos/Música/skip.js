const discord = require("discord.js");
module.exports = {
    nombre: "skip",
    alias: ["s"],
    desc: "Saltea una canción que estés escuchando",
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

        const skiped = new discord.MessageEmbed()
            .setTitle("Etherium Security | Music")
            .setColor("GREEN")
            .setDescription(`⏭ | ${message.author} ha saltado la canción!`)
            .setFooter("Etherium Security | Muisc");
        const player = message.client.manager.get(message.guild.id);
        if (!player) return message.reply(SyntaxE2);

        const { channel } = message.member.voice;
        if (!channel) return message.reply(SyntaxE);
        if (channel.id !== player.voiceChannel) return message.reply(SyntaxE);

        if (!player.queue.current)
            return message.reply("No hay música reproduciendose");

        const { title } = player.queue.current;

        player.stop();
        return message.reply(`La canción ${title} fue saltada.`);
    },
};