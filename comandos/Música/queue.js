const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
module.exports = {
        nombre: "queue",
        alias: ["list", "Songs-list", "l"],
        desc: "Mirá la lista de reproducción que está colocada!",
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
                if (!player) return message.reply(SyntaxE2);

                const queue = player.queue;
                const embed = new MessageEmbed().setAuthor(
                    `Lista para ${message.guild.name}`
                );

                // change for the amount of tracks per page
                const multiple = 10;
                const page = args.length && Number(args[0]) ? Number(args[0]) : 1;

                const end = page * multiple;
                const start = end - multiple;

                const tracks = queue.slice(start, end);

                if (queue.current)
                    embed.addField(
                        "Actual",
                        `[${queue.current.title}](${queue.current.uri})`
                    );

                if (!tracks.length)
                    embed.setDescription(
                        `No hay canciones la ${page > 1 ? `página ${page}` : ""}.`
      );
    else
      embed.setDescription(
        tracks
          .map((track, i) => `${start + ++i} - [${track.title}](${track.uri})`)
          .join("\n")
      );

    const maxPages = Math.ceil(queue.length / multiple);

    embed.setFooter(
      `Página ${page > maxPages ? maxPages : page} de ${maxPages}`
    );

    return message.reply(embed);
  },
};