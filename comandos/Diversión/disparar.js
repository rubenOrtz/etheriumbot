const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");
const usedCommand = new Set();

module.exports = {
  nombre: 'disparar',
  alias: [],
  desc: "Dispararle a un usuario!",
  run: async(client, message, args) => {

  if(usedCommand.has(message.author.id)){
        message.reply('No puede usar el comando, espera un momento.').then(i => i.delete({timeout: 5000}));
    } else {  
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member ||
      message.author;
    const url = `https://api.no-api-key.com/api/v2/shoot?image=${user.user.displayAvatarURL({ format: 'png' })}`;

    const embed = new MessageEmbed()
      
      .setImage(url)
      .setFooter("Etherium Security | Diversion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
      .setColor("BLACK")
      .setTimestamp()

    await message.channel.send(embed);
      usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
  }
}