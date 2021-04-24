const discord = require('discord.js');

module.exports = {
  nombre: 'asfagsgdhaha',
  alias: [],
  desc: "Te enseñará los comandos que posee el Bot!",
  run: (client, message, args) => {

    message.channel.send({
      embed: {
        color: ("BLACK"),
        title: ("Ayuda!"),
        description: ("``¡Se envió el panel de ayuda a tu DM, Revisalo!``"),
        timestamp: new Date(),
        footer: {
          icon_url: ('https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif'),
          text: "Etherium Security"
        }
      }
    })
    message.author.send({
      embed: {
        color: ('BLACK'),
        author: {
          name: client.user.username
        },
        title: "Comandos | Etherium Security |",
        url: "https://discord.gg/Jm3hAv7",
        description: "`¡Click en el nombre para ingresar al discord del bot por ayuda!`",
        fields: [{
            name: "🌎 **General** 🌎",
            value: "``ayuda`` **|** ``invite`` **|** ``partnerships`` **|** ``nuevo``"
          },
          {
            name: "⚒️ **Administración** ⚒️",
            value: "``backup [VIP]`` **|** ``anunciar`` **|** ``md`` **|** ``kick`` **|** ``Ban`` **|** ``HackBan`` **|** ``unban`` **|** `ForceBan` **|** `lock on/off`"
          },
          {
            name: "⭐ **Diversión** ⭐",
            value: "``pregunta`` **|** ``chiste`` **|** ``ups (+18)`` **|** ``meme`` **|** ``avatar`` **|** `memide`"
          },
          {
            name: "⚙️ **Configuración** ⚙️",
            value: "``setprefix`` **|** `setLogs [mantenimiento]`"
          },
          {
            name: "🎭 **información** 🎭",
            value: "``serverinfo`` **|** ``stats`` **|** ``info [user]`` **|** `ping` "
          },
          {
            name: "🛡️ **Soporte** 🛡️",
            value: "`reportar` **|** `sugerencia`"
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: ('https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif'),
          text: "Etherium Security | Help "
        }
      }

    })
  }
}