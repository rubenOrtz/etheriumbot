const { MessageEmbed } = require('discord.js');
const { giphy_API } = require('../../config.json');
const giphy = require('giphy-api')('9dG5Pl1UChzi0xnge8JWWE1LjOoPOQzX');

module.exports = {
    nombre: 'gif',
    alias: [],
    desc: "Busca un gif de alguna persona o alguna cosa!",
    run: async(client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
        if (!args[0]) {
            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription("**Por favor, introduzca una consulta de búsqueda!**")
                message.delete();
            return message.channel.send(embed)
        }
        try{
        giphy.search(args.join(' ')).then(function (res) {
            let id = res.data[0].id;
            let url = `https://media.giphy.com/media/${id}/giphy.gif`;
            const embed = {
                color: 'RANDOM',
                timestamp: new Date(),
                footer: {
                    text: message.guild.name,
                    icon_url: message.guild.iconURL()
                  },
                  image: {
                      url: url
                  }
            };
            message.channel.send({ embed });
        });
      } catch {
          return message.channel.send("**Extraviado!**")
      }
    }
};