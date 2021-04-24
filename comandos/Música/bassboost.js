const discord = require("discord.js");
const levels = {
    reset: 0.0,
    poco: 0.1,
    medio: 0.15,
    alto: 0.25,
};
module.exports = {
    nombre: "bassboost",
    alias: ["bb"],
    desc: "Observa que está reproduciendose!",
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
        const player = message.client.manager.get(message.guild.id);
        if (!player) return message.reply("there is no player for this guild.");

        const { channel } = message.member.voice;

        if (!channel) return message.reply("you need to join a voice channel.");
        if (channel.id !== player.voiceChannel)
            return message.reply("you're not in the same voice channel.");

        let level = "none";
        if (args.length && args[0].toLowerCase() in levels)
            level = args[0].toLowerCase();

        const bands = new Array(3)
            .fill(null)
            .map((_, i) => ({ band: i, gain: levels[level] }));

        player.setEQ(...bands);

        return message.reply(`set the bassboost level to ${level}`);
    },
};