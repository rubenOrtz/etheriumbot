const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    nombre: 'hanal',
    alias: [],
    desc: "Envia una foto hentai anal!",
    run: async(client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
        //command
        if (!message.channel.nsfw) return message.channel.send(":underage: Necesita ser un canal **NSFW**! para poder enviar este contenido")
        
        try {
            let body = await fetch(`https://nekobot.xyz/api/image?type=hanal`).then(url => url.json());
            let fourk = new Discord.MessageEmbed()
            .setTitle("NSFW HENTAI ANAL")
            .setColor(`#000000`)
            .setImage(body.message)
            .setTimestamp()
            .setFooter("Etherium Security | NSFW HENTAI" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
            message.channel.send(fourk);
        } catch (error) {
            console.log(error);
            const errorembed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setTitle("Ah ocurrido un error!")
            .setDescription(`**Error: ${error}**`)
            .setColor(0xff0000)
            .setFooter(message.guild.me.displayName)
            .setTimestamp()

            message.channel.send(errorembed)
        }
    }
};
