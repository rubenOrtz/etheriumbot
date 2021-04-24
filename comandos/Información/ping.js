const discord = require('discord.js');
module.exports = {
    nombre: 'ping',
    alias: [],
    desc: "Enseñará los MS del bot!",
    run: async(client, message, args) => {
            message.delete()
            const m = await message.channel.send(
                new discord.MessageEmbed()
                .setColor("BLACK")
                .setTitle("Otro emoji")
            )
            m.edit(
                new discord.MessageEmbed()
            .setTitle("¡Gracias por consultar!")
            .setDescription(`Tu latencia actual es de, ${m.createdTimestamp - message.createdTimestamp}ms`)
            .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            .setTimestamp()
            )


    }
}