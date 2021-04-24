const { MessageEmbed } = require('discord.js');

module.exports = {
  nombre: 'monedaflip',
  alias: ["coinflip"],
  desc: "Lanza la moneda!",
  run: async(client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Cara';
        else result = 'Cruz';
        const embed = new MessageEmbed()
            .setTitle(`**MonedaFlip**`)
            .setColor("RANDOM")
            .setDescription(`**${message.member.displayName} Te salio ${result}**!`)
            .setFooter("Etherium Security | MonedaFlip" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
            .setTimestamp()
        message.channel.send(embed);
    }
}
