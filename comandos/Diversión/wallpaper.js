const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    nombre: 'wallpaper',
    alias: ["wp"],
    desc: "Envia un wallpaper random!",
    run: async(client, message, args) => {
        try {
            let body = await fetch(`http://www.splashbase.co/api/v1/images/random`).then(url => url.json());
            let embed = new Discord.MessageEmbed()
                .setAuthor(`ETHERIUM WALLPAPER`)
                .setColor("black")
                .setTitle(`Wallpaper pedido por ${message.author.tag}!`)
                .setImage(body.url)
                .setTimestamp()
                .setFooter("Etherium Security | Diversion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
            message.channel.send(embed);
        } catch (error) {
            console.log(error);
            const errorembed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setTitle("Ah ocurrido un error!")
            .setDescription(`**Error: ${error}**`)
            .setColor(0xff0000)
            .setFooter("Etherium Security | Diversion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
            .setTimestamp()

            message.channel.send(errorembed)
        }
    }
};

