const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    nombre: 'ship',
    alias: ["sp"],
    desc: "Envia una foto, de preferencia!",
    run: async(client, message, args) => {
        try {
            if (message.mentions.users.size < 2) {
                return;
            } else {
                let user1 = message.mentions.users.first();
                let user2 = message.mentions.users.last();

                let body = await fetch(`https://nekobot.xyz/api/imagegen?type=ship&&user1=${user1.displayAvatarURL()}&&user2=${user2.displayAvatarURL()}`).then(url => url.json());

                let shipembed = new Discord.MessageEmbed()
                    .setAuthor(`ETHERIUM SHIP`)
                    .setColor("BLACK")
                    .setImage(body.message)
                    .setTimestamp()
                    .setFooter("Etherium Security | Diversion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
                message.channel.send(shipembed);
            }
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
