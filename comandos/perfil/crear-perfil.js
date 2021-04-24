const discord = require('discord.js')
const db = require('megadb')
const profile = new db.crearDB('profile')
const prefix_db = new db.crearDB('prefix')
const coin = new db.crearDB('vipcoin')
module.exports = {
    nombre: 'crear-perfil',
    alias: ["create-profile"],
    desc: "Podrás crearte un perfil!",
    run: async(client, message, args) => {
        const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
        let user = message.member;
        if(profile.tiene(`${user.id}`)){
            return message.channel.send("Ya tienes un perfil!, configuralo con" + "`" + `${prefix}config-perfil` + "`")
        }

        await profile.establecer(`${user.id}`, {
        desc: "Esta descripción es misteriosa",
        color: "",
        titulo: "Misteriosin",
        edad: "Indefinido",
        sexo: "Indefinido",
        imagen: "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif",
        rol: "Usuario",
        })
        await coin.establecer(`${user.id}`,{coins: 0})

        return message.channel.send(
            new discord.MessageEmbed()
            .setTitle("Etherium Security | Perfil")
            .setColor("RANDOM")
            .setDescription("Tu perfil fue creado con éxito! \n con el comando " + "`" + `${prefix}perfil <usuario>` + "`" + "podrás ver el perfil de cualquier usuario \n puedes utilizar" + "`" + `${prefix}config-perfil` + "`" +  "para configurarlo")
            .setTimestamp()    
        )

    }
}