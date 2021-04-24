const discord = require("discord.js");
const { json } = require("mathjs");
const db = require("megadb");
const json2 = require("../../json.json");
module.exports = {
    nombre: "slash",
    alias: [],
    desc: "comandos slash",

    run: async(client, message, args) => {
        const interactions = require("discord-slash-commands-client");

        const slash = new interactions.Client(
            "ODE4ODkyNDY5MTMwMzYyODkw.YEerCg.MV1jNtK4mlXN6J4Ifrb0CjHErfc",
            "818892469130362890"
        );

        slash.createCommand(json2);
    },
};