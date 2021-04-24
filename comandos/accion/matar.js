const Discord = require("discord.js")
const { wastedP } = require('../../actions.json');

module.exports = {
    nombre: 'matar',
    alias: [],
    desc: "matar a una persona",
    run: async(client, message, args) => {
   //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        const wasted = wastedP[Math.round(Math.random() * (wastedP.length - 1))];
        if (!args[0]){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} se emborrachó!`)
                .setColor('RANDOM')
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setImage(wasted);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} se emborrachó!`)
                .setColor('RANDOM')
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setImage(wasted);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == "725432896533299200") {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Por favor no me mates ${message.author.username}`)
                .setColor('RANDOM')
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setImage(wasted);
            return message.channel.send(embed);

        } else if (message.mentions.users.first()){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.mentions.users.first().username} Fue asesinado por ${message.author.username}`)
                .setColor('RANDOM')
                .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                .setImage(wasted);
            return message.channel.send(embed);
        }
    }

}