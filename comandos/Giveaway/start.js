const discord = require('discord.js')
const ms = require('ms')
const giveawaysManager = require("discord-giveaways")
module.exports = {
    nombre:'gstart',
    alias: [],
    desc: "",
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
            return message.channel.send(':x: Debe tener los permisos de administración de mensajes para comenzar los sorteos');
        }

        const giveawayChannel = message.mentions.channels.first();

        if(!giveawayChannel){
            return message.channel.send(":x: ¡Tienes que mencionar un canal válido!")
        }

        let giveawayDuration = args[1];

        if(!giveawayDuration || isNaN(ms(giveawayDuration))){
            return message.channel.send(':x: ¡Tienes que especificar una duración válida!');
        }
        let giveawayNumberWinners = args[2];

        if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
            return message.channel.send(':x: ¡Tienes que especificar un número válido de ganadores!');
        }

        let giveawayPrize = args.slice(3).join(' ');

        if(!giveawayPrize){
            return message.channel.send(':x: ¡Tienes que especificar un premio válido!');
        }

        client.giveawaysManager.start(giveawayChannel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayNumberWinners,
            messages: {
                giveaway: ("@everyone\n\n")+"🎉 **GIVEAWAY** 🎉",
                giveawayEnded: ("@everyone\n\n")+"🎉 **GIVEAWAY TERMINADO** 🎉",
                timeRemaining: "Tiempo restante: **{duration}**!",
                inviteToParticipate: "¡Reacciona con 🎉 para participar!",
                winMessage: "Felicidades, {winners}! Ganaste **{prize}**!",
                embedFooter: "Giveaways",
                noWinner: "Sorteo cancelado, no hay participaciones válidas.",
                hostedBy: "Alojado por: {user}",
                winners: "Ganador(es)",
                endedAt: "Terminó a las",
                units: {
                    seconds: "segundos",
                    minutes: "minutos",
                    hours: "horas",
                    days: "dias",
                    pluralS: false
                }
            }
        })

        message.channel.send(`El sorteo comenzó en ${giveawayChannel}!`)

    }
}