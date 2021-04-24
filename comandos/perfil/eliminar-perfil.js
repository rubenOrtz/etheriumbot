const discord = require('discord.js')
const db = require('megadb')
const profile = new db.crearDB('profile')
const prefix_db = new db.crearDB('prefix')
module.exports = {
    nombre: 'eliminar-perfil',
    alias: ["delete-profile"],
    desc: "Eliminarás tu perfil de la database",
    run: async(client, message, args) => {
        message.delete()
        //profile.eliminar(`${message.guild.id}.${user.id}`)
        let user = message.member;

        if(!profile.has(`${user.id}`)){
            return message.channel.send(
                new discord.MessageEmbed()
                .setThumbnail(user.user.displayAvatarURL())
                .setTitle("Etherium Security | Perfil")
                .setColor("RED")
                .setDescription("¡Tu no posees un perfil o ya fue eliminado!")
                .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            )
        }


        message.channel.send(
            new discord.MessageEmbed()
            .setThumbnail(user.user.displayAvatarURL())
            .setTitle("Etherium Security | Perfil")
            .setColor("RED")
            .setDescription("¿Estas seguro que quieres borrar tu perfíl?\n Perderás todo, rol, coins, configuración \n\n🟢 | Aceptar\n🔴 | Rechazar")
            .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
        ).then(m => {
            m.react("🟢")
            m.react("🔴")

            const filter = (reaction, user) => {
                return ['🟢', '🔴'].includes(reaction.emoji.name) && user.id === message.author.id;
            }

            m.awaitReactions(filter, {max : 1, time: 5000, errors: ["time"]})
            .then(async (collected) => {
                const reaction = collected.first();

                if(reaction.emoji.name === '🟢'){
                   await m.edit(
                        new discord.MessageEmbed()
                        .setThumbnail(user.user.displayAvatarURL())
                        .setTitle("Etherium Security | Perfil")
                        .setColor("GREEN")
                        .setDescription("¡Perfil borrado con éxito! \n\n Si quieres crear otro perfil coloca `<prefix>crear-perfil`")
                        .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
                    )
                    await m.reactions.removeAll()
                    await profile.eliminar(`${user.id}`)

                    await m.delete({timeout: 10000});
                }
                
                if(reaction.emoji.name === '🔴'){
                    await m.edit(
                        new discord.MessageEmbed()
                        .setThumbnail(user.user.displayAvatarURL())
                        .setTitle("Etherium Security | Perfil")
                        .setColor("BLUE")
                        .setDescription("¡tu perfíl aún sigue intacto!")
                        .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
                    )
                    await m.reactions.removeAll()
                    await m.delete({timeout: 10000});
                }
            })

        })
        
    }
}