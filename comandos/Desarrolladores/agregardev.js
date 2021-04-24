const discord = require('discord.js')
const db = require('megadb')
let devs = new db.crearDB('developers');

module.exports = {
    nombre: "devadd",
    alias: [],
    desc: "añadirás a un usuario al grupo de developers!",
    run: async(client, message, args) => {
        const devs = new db.crearDB('developers');

        if(!devs.has(message.author.id)) return;
        let user = message.mentions.members.first();
        if(message.mentions.users.size < 1 || !user) return message.channel.send("**__Menciona a una persona primero!__**")
        if(user.bot) return message.channel.send("__**Un bot no puede ser registrado.**__.");
        if(devs.has(user.id)) return message.channel.send("__**Este usuario ya esta registrado.**__")
        devs.establecer(user.id, user.user.tag);
        message.channel.send(
            new discord.MessageEmbed()
            .setDescription("__**Usuario "+user.user.tag+" ID registrada.**__")
            .setColor("BLACK")
            .setFooter("Etherium Security | Avatar" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
            .setTimestamp()
        )
    }
}