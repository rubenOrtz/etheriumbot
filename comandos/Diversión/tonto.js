const Discord = require("discord.js")
const usedCommand = new Set();

module.exports = {
  nombre: 'tonto',
  alias: [],
  desc: "Maquina de tonto!",
  run: async(client, message, args) => {

  if(usedCommand.has(message.author.id)){
        message.reply('Espere, está en enfriamiento.').then(i => i.delete({timeout: 3000}));
    } else {
      
   let ship = Math.floor(Math.random() * 100) + 1;
 
    let user = message.mentions.users.first() || message.author
 
      if(!user) {
        return message.channel.send("Asegúrate de elegir a una persona a la que quieras enviar!");
      }
 
    let embed = new Discord.MessageEmbed()
          .setTimestamp(Date.now())
          .setAuthor(
            `${message.author.tag}`,
            message.author.displayAvatarURL({ format: "png", dynamic: true })
          )
          .setDescription(`**${user.username}** Sos tonto un... ${ship}%`)
          .setFooter("Etherium Security | Diversion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
          .setColor("BLACK")
          message.channel.send(embed)
 
  usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

}