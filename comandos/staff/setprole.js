const discord = require('discord.js')
const db = require('megadb')
let profile = new db.crearDB('profile')
let staff = new db.crearDB('staff')

module.exports = {
    nombre: 'setprole',
    alias: [],
    desc: "Setea el rol de un usuario",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.resolve(args[0])
        let canal = client.channels.cache.get("781254398352293898")
        if (!staff.tiene(message.author.id)) return;

        if (!user) {
            return message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Security | Staff")
                .setDescription("Debés colocar la ID o mencionar al usuario")
                .setColor("RED")
            )
        }

        if (!profile.tiene(user.id)) {
            return message.channel.send(
                new discord.MessageEmbed()
                .setTitle("Etherium Security | Staff")
                .setDescription("El usuario que quieres mencionar no tiene un perfil, dile que se cree uno.")
                .setColor("RED")
            )
        }

        const loading = new discord.MessageEmbed()
        .setDescription("<a:loading2:771589484214747176>")
        const msgEmbed = new discord.MessageEmbed()
        .setTitle("Etherium Security | Staff")
        .setDescription("👑 - Staff \n 🔹 - VIP \n 📜 - Usuario\n\n ❌ - Cancelar el comando")
        .setColor("GREEN")
        .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
        .setFooter("Reaccioná al emoji para darle el rol a usuario")
        const exito = new discord.MessageEmbed()
        .setTitle("Etherium Security | Staff")
        .setDescription("¡El rol fue colocado con éxito!")
        .setColor("GREEN")
        const Cancelado = new discord.MessageEmbed()
        .setTitle("Etherium Security | Staff")
        .setDescription("El comando fue cancelado con éxito")
        .setColor("GREEN")
        message.delete()
        message.channel.send(loading).then(async (m) => {
            await m.react("👑")
            await m.react("🔹")
            await m.react("📜")
            await m.react("❌")
            await m.edit(msgEmbed)

            const filter = (reaction, user) => {
                return ['👑', '🔹', '📜', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
            }

            m.awaitReactions(filter, {
                max: 1,
                time: 50000,
                errors: ["time"]
            }).then(async (collected) => {
                const reaction = collected.first()

                if (reaction.emoji.name === '👑') {
                    await m.reactions.removeAll()
                    await profile.establecer(`${user.id}.rol`, "Staff")
                    await m.edit(exito)
                    await m.delete({
                        timeout: 5000
                    })
                    canal.send(
                        new discord.MessageEmbed()
                        .setTitle("Rol Log's | Etherium Security")
                        .setDescription(`El staff ${message.author} \n Le acaba de otorgar el rol **Staff** a ${user} \n\n ID : ${user.id}`)
                    )
                }

                if (reaction.emoji.name === '🔹') {
                    await m.reactions.removeAll()
                    await profile.establecer(`${user.id}.rol`, "V.I.P")
                    await m.edit(exito)
                    await m.delete({
                        timeout: 5000
                    })
                    canal.send(
                        new discord.MessageEmbed()
                        .setTitle("Rol Log's | Etherium Security")
                        .setDescription(`El staff ${message.author} \n Le acaba de otorgar el rol **VIP** a ${user} \n\n ID : ${user.id}`)
                    )
                }

                if (reaction.emoji.name === '📜') {
                    await m.reactions.removeAll()
                    await profile.establecer(`${user.id}.rol`, "Usuario")
                    await m.edit(exito)
                    await m.delete({
                        timeout: 5000
                    })
                    canal.send(
                        new discord.MessageEmbed()
                        .setTitle("Rol Log's | Etherium Security")
                        .setDescription(`El staff ${message.author} \n Le acaba de otorgar el rol **Usuario** a ${user} \n\n ID : ${user.id}`)
                    )
                }

                if (reaction.emoji.name === '❌') {
                    await m.reactions.removeAll()
                    await m.edit(Cancelado)
                    await m.delete({
                        timeout: 5000
                    })
                    
                }
            })
        })

    }
}