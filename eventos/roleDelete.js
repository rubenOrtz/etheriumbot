module.exports = async (client, role) =>{
    const discord = require('discord.js');
    const db = require('megadb');
    const logs = new db.crearDB("Logs")
    
    let canal = await logs.obtener(role.guild.id)
    if(!canal) return;

    const log = new discord.MessageEmbed()
    .setTitle("Etherium Security | Logs")
    .setDescription("Se ha eliminado un rol")
    .setColor("YELLOW")
    .addField("Rol :" , `**${role.name}**`)
    .setFooter(`ID: ${role.id}`)

    client.channels.cache.get(canal).send(log)

}