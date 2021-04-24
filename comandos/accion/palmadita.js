const Discord = require("discord.js")
const { patP } = require('../../actions.json');

module.exports = {
    nombre: 'palmadita',
    alias: [],
    desc: "Darle una palmadita a un usuario",
    run: async(client, message, args) => {

   //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        var pat = patP[Math.round(Math.random() * (patP.length - 1))]

        if (!args[0]){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`No puedes darte unas palmaditas, pero yo te daré una palmadita, ${message.author.username}!`)
                .setColor('RANDOM')
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setTimestamp()
                .setImage(pat);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`No puedes darte unas palmaditas, ¡pero yo te daré unas palmaditas!, ${message.author.username}!`)
                .setColor('RANDOM')
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setTimestamp()
                .setImage(pat);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == "725432896533299200") {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Gracias! ~~ ${message.author.username} Nyaa~~`)
                .setColor('RANDOM')
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setTimestamp()
                .setImage(pat);
            return message.channel.send(embed);

        } else if (message.mentions.users.first()){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} Le da una palmada a ${message.mentions.users.first().username}`)
                .setColor('RANDOM')
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setTimestamp()
                .setImage(pat);
            return message.channel.send(embed);
        }
    }
}