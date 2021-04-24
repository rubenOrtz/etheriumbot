const db = require('quick.db');

module.exports = {
    nombre: 'verify',
    alias: ["v"],
    desc: "Verificate!",
    run: async(client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
        let verifychannel = db.fetch(`verificationchannel_${message.guild.id}`);
        if (!verifychannel || verifychannel === null) return;
        if(!message.guild.channels.cache.has(verifychannel)) return;

        let verifiedchannel = message.guild.channels.cache.get(verifychannel);
        if (message.channel.id !== verifiedchannel.id) return;

        let verifyrole = db.fetch(`verificationrole_${message.guild.id}`);
        if (!verifyrole || verifyrole === null) return;
        if(!message.guild.roles.cache.has(verifyrole)) return;

        let verifiedrole = message.guild.roles.cache.get(verifyrole);
        if (verifiedrole.managed) return message.channel.send("**No se puede agregar esta función al usuario!**").then(m => m.delete({ timeout: 2000 }));
        if (message.guild.me.roles.highest.comparePositionTo(verifiedrole) <= 0) return message.channel.send('**Actualmente, el rol es superior al mío, por lo que no puedo agregarlo al usuario!**').then(m => m.delete({ timeout: 2000 }));
        if (message.member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**¡No se puede agregar un rol a este usuario! - [Superior a mí en la lista de roles]**').then(m => m.delete({ timeout: 2000 }));         
        
        try {
            if (message.member.roles.cache.has(verifiedrole.id)) {
                message.delete();
                return;
            }
            let m = await message.react('✅');
            message.member.roles.add(verifiedrole.id);
            m.delete({ timeout: 5000 });
        } catch {
            return;
        };
    }
};