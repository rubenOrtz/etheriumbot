const discord = require('discord.js')
const db = require('megadb')
const AIFiltro = new db.crearDB('FInvites')
const ALFiltro = new db.crearDB('FLoggers')
const AFFiltro = new db.crearDB('FFlood')
const ALIFiltro = new db.crearDB('FLinks')

module.exports = {
    nombre: 'config-filtros',
    alias: ["config-filter"],
    desc: "Puedes activar y desactivar Filtros.",
    run: async (client, message, args) => {

        const perms = message.member.hasPermission("ADMINISTRATOR");

        if (!perms) return message.channel.send(
            new discord.MessageEmbed()
            .setAuthor("Etherium Security | Filtros")
            .setDescription("`No` Tienes permisos para utilizar este comando!")
            .setTimestamp()
            .setFooter("Etherium Security | Configuración")
            .setColor("RED")
        )

        const loading = new discord.MessageEmbed()
            .setDescription("<a:loading2:771589484214747176>")

        const config = new discord.MessageEmbed()
            .setTitle("Etherium Security | Config-Filtros")
            .setDescription(`**Bienvenido a la configuración de filtros!** \n 🧿 | Activa y Desactiva el Anti-Invite \n 📨 | Activa y Desactiva el Anti-Flood \n 🔮 | Activa y Desactiva el Anti-Links \n 🔑 | Activa y Desactiva el Anti-IPLogger \n\n ❌ | Cancela el comando`)
            .setColor("GREEN")
            .setFooter("Reacciona al Emoji del filtro que quieras configurar!")
            .setTimestamp()

        const finishA = new discord.MessageEmbed()
            .setTitle("Etherium Security | Config-Filtros")
            .setColor("GREEN")
            .setDescription("¡Filtro Activado con éxito!")
            .setFooter("Etherium Security")
            .setTimestamp()
        const finishD = new discord.MessageEmbed()
            .setTitle("Etherium Security | Config-Filtros")
            .setColor("RED")
            .setDescription("¡Filtro Desactivado con éxito!")
            .setFooter("Etherium Security")
            .setTimestamp()

        const cancelado = new discord.MessageEmbed()
            .setTitle("Etherium Security | Config-Filtros")
            .setColor("RED")
            .setDescription("¡Comando cancelado!")
            .setFooter("Etherium Security")
            .setTimestamp()
        message.delete()
        message.channel.send(loading).then(async (m) => {
            await m.react("🧿")
            await m.react("📨")
            await m.react("🔮")
            await m.react("🔑")
            await m.react("❌")
            await m.edit(config)

            const filter = (reaction, user) => {
                return ['🧿', '📨', '🔮', '🔑', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
            }

            m.awaitReactions(filter, {
                max: 1,
                time: 50000,
                errors: ["time"]
            }).then(async (collected) => {
                const reaction = collected.first()


                if (reaction.emoji.name === '🧿') {
                    if (!AIFiltro.tiene(message.guild.id)) {
                        await m.reactions.removeAll()
                        AIFiltro.establecer(`${message.guild.id}`, "activado")
                        await m.edit(finishA)
                        await m.delete({
                            timeout: 10000
                        })
                    } else if (AIFiltro.tiene(`${message.guild.id}`, "activado")) {
                        await m.reactions.removeAll()
                        AIFiltro.eliminar(`${message.guild.id}`)
                        await m.edit(finishD)
                        await m.delete({
                            timeout: 10000
                        })
                    }
                }

                if (reaction.emoji.name === '📨') {
                    if (!AFFiltro.tiene(message.guild.id)) {
                        await m.reactions.removeAll()
                        AFFiltro.establecer(`${message.guild.id}`, "activado")
                        await m.edit(finishA)
                        await m.delete({
                            timeout: 10000
                        })
                    } else if (AFFiltro.tiene(`${message.guild.id}`, "activado")) {
                        await m.reactions.removeAll()
                        AFFiltro.eliminar(`${message.guild.id}`)
                        await m.edit(finishD)
                        await m.delete({
                            timeout: 10000
                        })
                    }
                }

                if (reaction.emoji.name === '🔮') {
                    if (!ALIFiltro.tiene(message.guild.id)) {
                        await m.reactions.removeAll()
                        ALIFiltro.establecer(`${message.guild.id}`, "activado")
                        await m.edit(finishA)
                        await m.delete({
                            timeout: 10000
                        })
                    } else if (ALIFiltro.tiene(`${message.guild.id}`, "activado")) {
                        await m.reactions.removeAll()
                        ALIFiltro.eliminar(`${message.guild.id}`)
                        await m.edit(finishD)
                        await m.delete({
                            timeout: 10000
                        })
                    }
                }

                if (reaction.emoji.name === '🔑') {
                    if (!ALFiltro.tiene(message.guild.id)) {
                        await m.reactions.removeAll()
                        ALFiltro.establecer(`${message.guild.id}`, "activado")
                        await m.edit(finishA)
                        await m.delete({
                            timeout: 10000
                        })
                    } else if (ALFiltro.tiene(`${message.guild.id}`, "activado")) {
                        await m.reactions.removeAll()
                        ALFiltro.eliminar(`${message.guild.id}`)
                        await m.edit(finishD)
                        await m.delete({
                            timeout: 10000
                        })
                    }
                }

                if (reaction.emoji.name === '❌') {
                    await m.reactions.removeAll()
                    await m.edit(cancelado)
                        await m.delete({
                            timeout: 10000
                        })
                }
            })

        })
    }
}