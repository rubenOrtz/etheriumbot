const discord = require("discord.js");
const levels = {
    reset: 0.0,
    poco: 0.1,
    medio: 0.15,
    alto: 0.25,
};
module.exports = {
    nombre: "repetir",
    alias: ["loop"],
    desc: "Reproduce una canción infinitamente",
    run: async(client, message, args) => {
        const player = message.client.manager.players.get(message.guild.id);
        const SyntaxE = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("Etherium Security")
            .setDescription("Error:" + "__`Debés estar en un canal de voz`__")
            .setTimestamp()
            .setFooter("Etherium Security");
        if (!player) return message.reply(SyntaxE);

        const { channel } = message.member.voice;

        if (!channel) return message.reply(SyntaxE);
        if (channel.id !== player.voiceChannel) return message.reply(SyntaxE);

        if (args.length && /queue/i.test(args[0])) {
            player.setQueueRepeat(!player.queueRepeat);
            const queueRepeat = player.queueRepeat ? "enabled" : "disabled";
            return message.reply(`${queueRepeat} la cola se repetirá`);
        }

        player.setTrackRepeat(!player.trackRepeat);
        const trackRepeat = player.trackRepeat ? "enabled" : "disabled";
        return message.reply(`${trackRepeat} la canción se repetirá`);
    },
};