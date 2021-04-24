const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const fetch = require("node-fetch");
const db = require('megadb')
const prefix_db = new db.crearDB('prefix')

module.exports = {
    nombre: 'tweet',
    alias: ["tw"],
    desc: "Imagen de tweet, falso!",
    run: async(client, message, args) => {
        const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
        try {
            let text = args.slice(1).join(" ");
            let uname = args[0];
            if (!text || !uname) return 
            let body = await fetch(`https://nekobot.xyz/api/imagegen?type=tweet&&username=${uname}&&text=${text}`).then(url => url.json());
            let tweetembed = new Discord.MessageEmbed()
                .setColor("BLACK")
                .setAuthor(`ETHERIUM TWEETS`)
                .setImage(body.message)
                .setTimestamp()
                .setFooter("Etherium Security | Diversion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
            message.channel.send(tweetembed);
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

