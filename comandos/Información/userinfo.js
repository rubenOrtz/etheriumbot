const Discord = require("discord.js");
const moment = require("moment");
module.exports = {
  nombre: 'userinfo',
  alias: ["user","info"],
  desc: "Podrás ver los datos de la persona que desees",
  run: (bot, message, args) => {
          let user;
	if(message.mentions.users.first()){
		user = message.mentions.users.first();
	}else{
		user = message.author;
	}
        let member = message.guild.member(user);

    let uEmbed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("User Info")
      .setAuthor(
        `${user.username} Info`,
        user.displayAvatarURL
      )
      .setFooter('Etherium Security | User', 'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
      .setThumbnail(bot.user.displayAvatarURL())
      .addField("**Nombre de usuario:**", "```fix\n" + `${user.username}` + "```", true)
      .addField("**Tag:**", "```fix\n" + `#${user.discriminator}` + "```", true)
      .addField("**ID:**", "```fix\n" +`${user.id}` + "```", true)
      .addField("**Bot:**", "```fix\n" +  user.bot +"```", true)
      .addField("**Juego:**", "```fix\n"+`${user.presence.game ? user.presence.game : 'Ni un solo juego'}`+"```", true)
      .addField(`**${user.username}`+ "'" +`s Apodo:**` , "```fix\n"+ `${member.nickname !== null ? `${member.nickname}`: 'NONE'}` + "```",true)
      .addField("**Estado:**", "```fix\n"+ `${user.presence.status}` + "```", true)
      .addField("**Se unió el:**", "```fix\n"+`${moment.utc(user.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}` + "```", true)
      .addField("**Creado en:**", "```fix\n"+ `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`+ "```", true)
      if(member.hasPermission(["KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR","MANAGE_CHANNELS","MANAGE_GUILD","VIEW_AUDIT_LOG","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","MENTION_EVERYONE","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_ROLES_OR_PERMISSIONS","MANAGE_WEBHOOKS","MANAGE_EMOJIS"])){
        uEmbed.addField("Permisos", "```fix\nKick Members, Ban Members, Administrator, Manage Channels, Manage Server, Manage Messages, Mention Everyone, Manage Nicknames, Manage Roles, Manage Webhooks, Manage Emojis```", true)
      }else if(member.hasPermission(["KICK_MEMBERS","VIEW_AUDIT_LOGº","MANAGE_MESSAGES", "MANAGE_GUILD", "MENTION_EVERYONE","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_EMOJIS"])){
        uEmbed.addField("Permisos", "```fix\nKick Members, Ban Members, Manage Channels, Manage Server, Manage Messages, Mention Everyone, Manage Nicknames, Manage Roles, Manage Webhooks, Manage Emojis```", true)
      }else if(member.hasPermission(["MENTION_EVERYONE"])){
        uEmbed.addField("Permisos", "Mention Everyone", true)
      }
      

    message.channel.send(uEmbed);
  }
};
