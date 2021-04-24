const discord = require('discord.js')
module.exports = {
    nombre: 'guilds',
    alias: [],
    desc: "Mostrara las guilds",
    run: async (client, message, args) => {
        const owners = client.guilds.cache.reduce((object, guild) => {
            object[guild.ownerID] = ++object[guild.ownerID] || 1;
            return object;
        }, {}) 
        const repeatedOwners = [];
        for (const owner in owners) {
            if (owners[owner] > 1) repeatedOwners.push(owner);
        }
        let guilds = '';
        for (const owner of repeatedOwners) { 
            const repeatedGuilds = client.guilds.cache.filter((x) => x.ownerID === owner).map((x) => x);
            const guildOwner = await client.users.fetch(owner).catch(() => {}) || null;
            for (const guild of repeatedGuilds) {
                guilds += `${guild.name} (${guild.id})\n\t${guildOwner.tag} (${guildOwner.id})\n`; 
            }
        }

        console.log(guilds);
    }
}