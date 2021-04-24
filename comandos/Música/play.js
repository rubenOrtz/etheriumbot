const discord = require("discord.js");
const { Manager } = require("erela.js");
const radioBrowser = require("radio-browser");

module.exports = {
    nombre: "play",
    alias: ["p"],
    desc: "Inicia una canción que mas te guste",
    run: async(client, message, args) => {
        const SyntaxA = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("Etherium Security")
            .setDescription("Syntax Error: `play`" + "__`<URL/Nombre>`__")
            .setTimestamp()
            .setFooter("Etherium Security");
        const SyntaxE = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("Etherium Security")
            .setDescription("Error:" + "__`Debés estar en un canal de voz`__")
            .setTimestamp()
            .setFooter("Etherium Security");

        const canal = new discord.MessageEmbed()
            .setTitle("Etherium Security | Music")
            .setColor("RED")
            .setDescription("¡Necesitas unirte al canal de voz!")
            .setFooter("Etherium Security | Muisc");

        const uso = new discord.MessageEmbed()
            .setTitle("Etherium Security | Music")
            .setColor("RED")
            .setDescription("Modo de uso: play <URL | Nombre del vídeo>")
            .setFooter("Etherium Security | Muisc");

        if (!message.member.voice.channel) {
            message.channel.send(cana1);
        } else if (!args) {
            message.channel.send(uso);
        }
        const res = await client.manager.search(args[0], message.author);

        const player = client.manager.create({
            guild: message.guild.id,
            voiceChannel: message.member.voice.channel.id,
            textChannel: message.channel.id,
        });

        player.connect();

        player.queue.add(res.tracks[0]);
        message.channel.send(`Enqueuing track ${res.tracks[0].title}.`);

        // Plays the player (plays the first track in the queue).
        // The if statement is needed else it will play the current track again
        if (!player.playing && !player.paused && !player.queue.size) player.play();

        // For playlists you'll have to use slightly different if statement
        if (!player.playing &&
            !player.paused &&
            player.queue.totalSize === res.tracks.length
        )
            player.play();
    },
};