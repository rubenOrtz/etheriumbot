const discord = require('discord.js')
const DabiImages = require('dabi-images')
module.exports = {
  nombre: 'ups',
  alias: ["xxx"],
  desc: "Enseñará una imagen Porno",
  run: async (client, message, args) => {
    
    const SyntaxE = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor("Etherium Security")
      .setDescription("Error:" + "__`Este canal no es NFSW`__")
      .setTimestamp()
      .setFooter("Etherium Security")
    if (!message.channel.nsfw) return message.channel.send(SyntaxE)

    const DabiClient = new DabiImages.Client();
    DabiClient.nsfw.real.ass()
      .then((res) => {
        console.log('RES:', res.url)
        message.channel.send(res.url)
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
  }
}