const Discord = require("discord.js")
const usedCommand = new Set();

module.exports = {
  nombre: 'love',
  alias: [],
  desc: "Amor entre dos personas!",
  run: async(client, message, args) => {

  if(usedCommand.has(message.author.id)){
        message.reply('Espere, no lo use muy rapido!').then(i => i.delete({timeout: 3000}));
    } else {
      
    let ship = Math.floor(Math.random() * 100) + 1;
    let robber = args[0]
    let user = args[1] || message.author
        
      if(!robber) {
        return message.channel.send("¡Asegúrate de elegir una persona a la que quieras enviar!");
      }
  
    let embed = new Discord.MessageEmbed()
          .setTimestamp(Date.now())
          .setAuthor(
            `${message.author.tag}`,
            message.author.displayAvatarURL({ format: "png", dynamic: true })
          )
          .setDescription(`**${robber}** & **${user}**, Su porcentaje de amor es... ${ship}%♥`)
          .setColor("BLACK")
          .setFooter("Etherium Security | Diversion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
          message.channel.send(embed).then(m => {
m.react('❤')})
      
      usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
    
  }
}