const {MessageEmbed} = require('discord.js');
module.exports = {
    nombre: 'avatar',
    alias: [],
    desc: "Enseñará el avatar del usuario que menciones!",
    run: async(client, message, args) => {

        let msgEmbed = new MessageEmbed()
        if(!message.mentions.members.first()){
           msgEmbed.setTitle('Tu Avatar')
	    msgEmbed.setDescription("[Link del avatar]("+ message.author.displayAvatarURL() +")")
            msgEmbed.setImage(message.author.displayAvatarURL({size: 2048, dynamic: true, format: "png"}))
            msgEmbed.setColor("BLACK")
            msgEmbed.setFooter("Etherium Security | Avatar" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
            msgEmbed.setTimestamp()
            return message.channel.send(msgEmbed)
        }else{
            let mencionado = message.mentions.members.first() || message.member;
	    msgEmbed.setDescription("[Link del avatar]("+ mencionado.user.displayAvatarURL() +")")
            msgEmbed.setTitle(`Avatar de ${mencionado.user.tag}`)
            msgEmbed.setImage(mencionado.user.displayAvatarURL({size: 2048, dynamic: true, format: "png"}))
            msgEmbed.setFooter("Etherium Security | Avatar" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
            msgEmbed.setColor("BLACK")
            msgEmbed.setTimestamp()
            return message.channel.send(msgEmbed)
        }
    }
}