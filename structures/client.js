const Discord = require("discord.js");
const chalk = require("chalk");

module.exports = class Client extends Discord.Client {
    constructor() {
        super({
            disableMentions: "everyone",
            messageCacheMaxSize: 50,
            messageCacheLifetime: 60,
            messageSweepInterval: 120,
            partials: ["MESSAGE", "CHANNEL", "REACTION"],
            ws: {
                intents: [
                    "GUILDS",
                    "GUILD_MESSAGES",
                    "GUILD_VOICE_STATES",
                    "GUILD_MESSAGE_REACTIONS",
                ],
            },
        });
    }

    log(msg) {
        console.log(
            chalk.white.bold(`[${new Date().toLocaleString()}]`) +
            chalk.white.bold(" > ") +
            msg
        );
    }

    async login(token = this.token) {
        super.login(token);
    }
};