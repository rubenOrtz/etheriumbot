const discord = require('discord.js')
module.exports = {
    nombre: 'serverinfo',
    alias: [],
    desc: "Mostrará la información de todo el servidor!",
    run: (client, message, args) => {
        let server = message.guild;

        let verif = [
            "Ninguno",
            "Bajo",
            "Medio",
            "(╯°□°）╯︵ ┻━┻ (Alto)",
            "┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻ (Muy alto)"
        ]

        let boost = {
                    0: "Nivel 0",
                    1: "Nivel 1",
                    2: "Nivel 2",
                    3: "Nivel 3",
                    4: "Nivel 4",
                    5: "Nivel 5",
                    6: "Nivel 6"
        }

        let region = {
            europe: "Europa :flag_eu:",
            brazil: "Brasil :flag_br: ",
            hongkong: "Hong Kong :flag_hk:",
            japan: "Japón :flag_jp:",
            russia: "Rusia :flag_ru:",
            singapore: "Singapur :flag_sg:",
            southafrica: "Sudáfrica :flag_za:",
            sydney: "Sydney :flag_au:",
            "us-central": "Central US :flag_us:",
            "us-east": "Este US :flag_us:",
            "us-south": "Sur US :flag_us:",
            "us-west": "Oeste US :flag_us:",
            "vip-us-east": "VIP US Este :flag_us:",
            "eu-central": "Europa Central :flag_eu:",
            "eu-west": "Europa Oeste :flag_eu:",
            london: "London :flag_gb:",
            amsterdam: "Amsterdam :flag_nl:",
            india: "India :flag_in:"
        }

        let canales = [
            `**👑: ${server.channels.cache.size} | ✉️: ` + server.channels.cache.filter(c => c.type == "text").size + "**",
            "**🎙️: " + server.channels.cache.filter(c => c.type == "voice").size + " | 📁: " + server.channels.cache.filter(c => c.type == "category").size + "**"
        ]

        const msgEmbed = new discord.MessageEmbed()
        .setColor("BLACK")
        .setThumbnail(message.guild.iconURL())
        .setAuthor(server.name, server.iconURL())
        .addField("**<a:ES_verified:770984597437022220>「`🆔`」• ID: **", server.id, false)
        .addField("**<a:ES_verified:770984597437022220>「`👑`」• Dueño: **",  server.owner.user.username+"#"+server.owner.user.discriminator + `  [${server.owner.user.id}]`, false)
        .addField("**<a:ES_verified:770984597437022220>「`⚜️`」• Roles:**", server.roles.cache.size, false)
        .addField("**<a:ES_verified:770984597437022220>「`🗺️`」• Región: **", region[server.region], false)
        .addField("**<a:ES_verified:770984597437022220>「`📲`」• Creado: **", server.joinedAt.toDateString(), false)
        .addField("**<a:ES_verified:770984597437022220>「`💜`」• Boost: **", boost[server.premiumTier], false)
        .addField("**<a:ES_verified:770984597437022220>「`👤`」• Miembros: **", `\`📈\`：Total: ${server.members.cache.size} \n\`👤\`：Usuarios: ${server.members.cache.filter(b => !b.user.bot).size} \n\`🤖\`：Bots: ${server.members.cache.filter(b => b.user.bot).size}`, false)
        .addField("**<a:ES_verified:770984597437022220>「`💼`」• Canales: **", `\`📊\`：Total: ${server.channels.cache.size} \n\`✉️\`：Texto: ${server.channels.cache.filter(c => c.type == "text").size} \n\`🎙️\`：Voz: ${server.channels.cache.filter(c => c.type == "voice").size} \n\`📁\`：Categorías: ${server.channels.cache.filter(c => c.type == "category").size}`, false)
        
        if(msgEmbed.length > 1023) {
            const msgEmbed1 = new discord.MessageEmbed()
            .setColor("#98BCDA")
            .setThumbnail(server.iconURL)
            .setAuthor(server.name, server.iconURL)
            .addField("**<a:ES_verified:770984597437022220>「`🆔`」• ID: **", server.id, false)
            .addField("**<a:ES_verified:770984597437022220>「`👑`」• Dueño: **",  server.owner.user.username+"#"+server.owner.user.discriminator + `  [${server.owner.user.id}]`, false)
            .addField("**<a:ES_verified:770984597437022220>「`⚜️`」• Roles:**", server.roles.size, false)
            .addField("**<a:ES_verified:770984597437022220>「`🗺️`」• Región: **", region[server.region], false)
            .addField("**<a:ES_verified:770984597437022220>「`📲`」• Creado: **", server.joinedAt.toDateString(), false)
            .addField("**<a:ES_verified:770984597437022220>「`💜`」• Boost: **", boost[server.premiumTier], false)

            const msgEmbed3 = new discord.MessageEmbed()
            .addField("**<a:ES_verified:770984597437022220>「`👤`」• Miembros: **", `\`📈\`：Total: ${server.members.cache.size} \n\`👤\`：Usuarios: ${server.members.cache.filter(b => !b.user.bot).size} \n\`🤖\`：Bots: ${server.members.cache.filter(b => b.user.bot).size}`, false)
            .addField("**<a:ES_verified:770984597437022220>「`💼`」• Canales: **", `\`📊\`：Total: ${server.channels.cache.size} \n\`✉️\`：Texto: ${server.channels.cache.filter(c => c.type == "text").size} \n\`🎙️\`：Voz: ${server.channels.cache.filter(c => c.type == "voice").size} \n\`📁\`：Categorías: ${server.channels.filter(c => c.type == "category").size}`, false)
        
            return message.channel.send({embed: msgEmbed1}).then(() => {
                message.channel.send({embed: msgEmbed3})
            })
        }

        message.channel.send({embed: msgEmbed})
    }
}