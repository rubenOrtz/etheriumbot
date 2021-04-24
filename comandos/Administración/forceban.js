const discord = require("discord.js");
const db = require("megadb");
module.exports = {
    nombre: "forceban",
    alias: [],
    desc: "Baneará a todos los usuarios de tu servidor dentro de esta lista",
    run: async(client, message, args) => {
        const SyntaxE = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("Etherium Security")
            .setDescription(
                "Error:" + "__`No tienes permisos para utilizar este comando`__"
            )
            .setTimestamp()
            .setFooter("Etherium Security");

        let forceban = new db.crearDB("Ids");
        let i = await forceban.obtener("ids");
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(SyntaxE);
        }

        message.channel.send(
            `Se han baneado exitosamente ${i.length} usuarios maliciosos de este servidor.`
        );

        message.author.send(
            new discord.MessageEmbed()
            .setAuthor("Etherium Security **|** MD")
            .setDescription(
                `▸ <a:SB_CheckMarck:769915075003547678> **|** El comando **ForceBan** fue ejecutado su servidor está libre de __Amenazas__`
            )
            .setFooter(
                "Etherium Security | ForceBan",
                "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif"
            )
            .setTimestamp()
        );
        i.forEach((id) => {
            console.log(id);
            message.guild.members.ban(id.toString());
        });
    },
};