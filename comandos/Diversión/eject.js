const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  nombre: 'ejecutar',
  alias: ['among', 'eject'],
  descripción: "Enviar al ejecutado al espacio!",
  run: async(client, message, args) => {
    if (!args[0]) {
      const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`**Por favor, ${message.author} menciona un usuario!**`)
          message.delete();
      return message.channel.send(embed)
  }
    
         try {
 
const user = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    const imp = [true, false];
    const imposter = imp[Math.floor(Math.random() * imp.length)];
    const crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"]
    const crewmate = crew[Math.floor(Math.random() * crew.length)];
    
    const data = await fetch(`https://vacefron.nl/api//ejected?name=${user.username}&impostor=${imposter}&crewmate=${crewmate}`)
    
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL())
      .setTitle(`${message.author.username} decidió expulsar a ${user.username}`)
      .setColor("BLACK")
      .setImage(`${data.url}`)
      
    message.channel.send(embed);
  }catch(err) {
    const embed2 = new Discord.MessageEmbed()
    .setTitle(`${client.emote.error} Algo salió mal.\n${client.emote.error}Nota: No funcionará si el usuario contiene caracteres no deseados en su nombre de usuario.`)
    .setColor("BLACK")
    message.channel.send(embed2)
    }

    }
}

