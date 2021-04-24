const Discord = require("discord.js")

module.exports = {
    nombre: 'respeto',
    alias: ["f"],
    desc: "Hazle preguntas al bot!",
    run: async(client, message, args) => {
        const arg = args.slice(0).join(" ");
        if (!arg) {
          message.channel.send("Mencione un usuario.");
          return;
        }
  
        if (!args[0]){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} ha presentado sus respetos a`, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
                .setColor("BLACK")
                .setFooter(`Reaccione al emoji para presentar sus respetos.`);
            message.channel.send({ embed }).then(m => m.react(` \<:efe:790026970456260618> `));

            return null;

        } else {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png', dynamic : true }))
                .setColor("BLACK")
                .setDescription(`${message.author} \<:efe:790026970456260618> ha presentado sus respetos a ${args.join(" ")}`)
                .setFooter(`Reaccione al emoji para presentar sus respetos.`);
            message.channel.send({ embed }).then(m => m.react(` \<:efe:790026970456260618> `));

            return null;
        }
    }
}