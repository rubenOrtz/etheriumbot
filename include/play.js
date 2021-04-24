const ytdlDiscord = require("ytdl-core-discord");
const {
  MessageEmbed
} = require('discord.js')
module.exports = {
  async play(song, message) {

    const queue = message.client.queue.get(message.guild.id);


    const finish = new MessageEmbed()
      .setTitle("Etherium Security | Music")
      .setColor("RANDOM")
      .setDescription("🚫 La lista de reproducción fue terminada")
      .setFooter("Etherium Security | Muisc")

      if (!song) {
        queue.channel.leave();
        message.client.queue.delete(message.guild.id);
        return queue.textChannel.send(finish).catch(console.error);
      }
    let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";

    try {
      if (song.url.includes("youtube.com")) {
        stream = await ytdlDiscord(song.url, {
          highWaterMark: 1 << 25
        });
      }
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      console.error(error);
      return message.channel.send(`Error: ${error.message ? error.message : error}`);
    }

    queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));

    const dispatcher = queue.connection
      .play(stream, {
        type: streamType
      })
      .on("finish", () => {
        if (queue.loop) {
          let lastSong = queue.songs.shift();
          queue.songs.push(lastSong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", (err) => {
        console.error(err);
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      });
    dispatcher.setVolumeLogarithmic(queue.volume / 100);
  }
}