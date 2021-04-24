const discord = require('discord.js')
const db = require('megadb')
const prefix_db = new db.crearDB('prefix')
const coin = new db.crearDB('vipcoin')
const profile = new db.crearDB('profile')
module.exports = {
    nombre: 'tienda',
    alias: ["Shop"],
    desc: "Te mostrará la tienda Premium",
    run: async(client, message, args) => {
        let user = message.member;
        const coins = await coin.obtener(`${user.id}.coins`)

        const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
        if(!profile.tiene(`${user.id}`)){
            return message.channel.send(
                new discord.MessageEmbed()
                .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
                .setTitle("Etherium Security | Perfil")
                .setDescription("Debés crearte un perfil antes de configurarlo!\n\n"+ "`" + `${prefix}crear-perfil` + "`")
                .setColor("RED")
                .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")    
            )
        }

        if(!coin.tiene(user.id)){
            await coin.establecer(`${user.id}`,{coins: 0})
        }

        const msgEmbed = new discord.MessageEmbed()
        .setTitle("Tienda | Etherium Security")
        .setColor("GREEN")
        .setDescription("Tienda oficial de Etherium Security")
        .setURL("https://discord.gg/Jm3hAv7")
        .addFields(
            {name:"Vip", value:"150 Coins"},
            {name:"PartnerShips", value:"1 día = 50 Coins \n 7 días = 250 Coins \n 30 Días = 1500 Coins"},
            {name:"Coins", value:"100 Coins = 1$"}
        )
        .setFooter(`Actualmente posees un cantidad de ${coins} coins guardados`)
        message.channel.send(msgEmbed)
    }
}