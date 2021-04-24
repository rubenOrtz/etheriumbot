/*
 *               Etherium Security
 *   Developers: Amadeus - Yashiroh - MartoOo
 */
const mongoose = require("mongoose");
const discord = require("discord.js");
const { token, MongoURL } = require("./config");
const { Client, ShardingManager } = require("discord.js");
const { Manager } = require("erela.js");
const Statcord = require("statcord.js");

const manager = new ShardingManager("etherium.js", {
    token: token,
    totalShards: 1,
    shardList: "auto",
    mode: "process",
    respawn: "true",
    timeout: 999999,
});

const client = new Client();
const statcord = new Statcord.ShardingClient({
    manager,
    key: "statcord TOKEN",
    postCpuStatistics: true /* Whether to post memory statistics or not, defaults to true */ ,
    postMemStatistics: true /* Whether to post memory statistics or not, defaults to true */ ,
    postNetworkStatistics: true /* Whether to post memory statistics or not, defaults to true */ ,
});
client.manager = new Manager({
        // Pass an array of node. Note: You do not need to pass any if you are using the default values (ones shown below).
        nodes: [
            // If you pass a object like so the "host" property is required
            {
                host: "localhost", // Optional if Lavalink is local
                port: 2333, // Optional if Lavalink is set to default
                password: "youshallnotpass", // Optional if Lavalink is set to default
            },
        ],
        // A send method to send data to the Discord WebSocket using your library.
        // Getting the shard for the guild and sending the data to the WebSocket.
        send(id, payload) {
            const guild = client.guilds.cache.get(id);
            if (guild) guild.shard.send(payload);
        },
    })
    .on("nodeConnect", (node) =>
        console.log(`Node ${node.options.identifier} connected`)
    )
    .on("nodeError", (node, error) =>
        console.log(
            `Node ${node.options.identifier} had an error: ${error.message}`
        )
    )
    .on("trackStart", (player, track) => {
        let nowPlaying = new discord.MessageEmbed()
            .setTitle("Reproduciendo ahora")
            .setDescription(`${track.title}\n${track.url}`)
            .setColor("#F8AA2A")
            .setAuthor("Etherium Security");
        client.channels.cache.get(player.textChannel).send(nowPlaying);
    })
    .on("queueEnd", (player) => {
        client.channels.cache.get(player.textChannel).send("Queue has ended.");

        player.destroy();
    });

statcord.on("autopost-start", () => {
    console.log("Started autopost");
});
statcord.on("post", (status) => {
    if (!status) console.log("Successful post");
    else console.error(status);
});

mongoose.connect(MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

manager.spawn().catch((err) => console.log(err));