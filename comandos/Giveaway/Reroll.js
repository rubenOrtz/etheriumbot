const discord = require('discord.js')
const ms = require('ms')

module.exports = {
    nombre: 'greroll',
    alias: [],
    desc: "Rerolea el sorteo!",
    run: async(client, message, args) => {
        
        if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
            return message.channel.send(':x: Debes tener los permisos de administración de mensajes para volver a lanzar sorteos.');
        }

        if(!args[0]){
            return message.channel.send(':x: ¡Tienes que especificar un ID de mensaje válido!');
        }

        let giveaway = 
    
        client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    
        client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if(!giveaway){
            return message.channel.send('No pude encontrar un sorteo con la siguiente ID :  `'+ args.join(' ') +'`.');
        }

        client.giveawaysManager.reroll(giveaway.messageID).then(() => {
            message.channel.send('¡Sorteo repetido!');
        }).catch((e) =>{
            if(e.startsWith(`El sorteo con la ID ${giveaway.messageID} no ha terminado`)){
                message.channel.send('¡Este sorteo no ha terminado!');
            } else {
                console.error(e);
                message.channel.send('Ocurrió un error...');
            }
        })

    }
}