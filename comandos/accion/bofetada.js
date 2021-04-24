const Discord = require("discord.js")
const { slapP } = require(`../../actions.json`);
const { selfSlapP } = require('../../actions.json');

module.exports = {
    nombre: 'bofetada',
    alias: [],
    desc: "Darle una bofetada a una persona",
    run: async(client, message, args) => {

   //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
  
        var selfSlap = selfSlapP[Math.round(Math.random() * (selfSlapP.length - 1))]
        var slap = slapP[Math.round(Math.random() * (slapP.length - 1))]

        if (!args[0]){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`No te abofetees, ${message.author.username}!!!`)
                .setColor('RANDOM')
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setImage(selfSlap);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`No te abofetees, ${message.author.username}!!!`)
                .setColor('RANDOM')
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setImage(selfSlap);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == "725432896533299200") {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Lo siento, no me abofetees :'( ${message.author.username}`)
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setColor('RANDOM');
            return message.channel.send(embed);

        } else if (message.mentions.users.first()){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} Le dio una bofetada a ${message.mentions.users.first().username}`)
                .setColor('RANDOM')
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setImage(slap);
            return message.channel.send(embed);
        }
    }

}