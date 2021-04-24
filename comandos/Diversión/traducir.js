const discord = require("discord.js");
const translate = require("@k3rn31p4nic/google-translate-api");
module.exports = {
  nombre: 'traducir',
  alias: ["traductor"],
  desc: "Traduce cualquier texto a cualquier idioma!",
  run: async(client, message, args) => {
    
    let bahasa = ["af", "Afrikaans",
    "sq", "Albanian",
    "am", "Amharic",
    "ar", "Arabic",
    "hy", "Armenian",
    "az", "Azerbaijani",
    "eu", "Basque",
    "be", "Belarusian",
    "bn", "Bengali",
    "bs", "Bosnian",
    "bg", "Bulgarian",
    "ca", "Catalan",
    "ceb", "Cebuano",
    "ny", "Chichewa",
    "zh-cn", "Chinese Simplified",
    "zh-tw", "Chinese Traditional",
    "co", "Corsican",
    "hr", "Croatian",
    "cs", "Czech",
    "da", "Danish",
    "nl", "Dutch",
    "en", "English",
    "eo", "Esperanto",
    "et", "Estonian",
    "tl", "Filipino",
    "fi", "Finnish",
    "fr", "French",
    "fy", "Frisian",
    "gl", "Galician",
    "ka", "Georgian",
    "de", "German",
    "el", "Greek",
    "gu", "Gujarati",
    "ht", "Haitian Creole",
    "ha", "Hausa",
    "haw", "Hawaiian",
    "iw", "Hebrew",
    "hi", "Hindi",
    "hmn", "Hmong",
    "hu", "Hungarian",
    "is", "Icelandic",
    "ig", "Igbo",
    "id", "Indonesian",
    "ga", "Irish",
    "it", "Italian",
    "ja", "Japanese",
    "jw", "Javanese",
    "kn", "Kannada",
    "kk", "Kazakh",
    "km", "Khmer",
    "ko", "Korean",
    "ku", "Kurdish (Kurmanji)",
    "ky", "Kyrgyz",
    "lo", "Lao",
    "la", "Latin",
    "lv", "Latvian",
    "lt", "Lithuanian",
    "lb", "Luxembourgish",
    "mk", "Macedonian",
    "mg", "Malagasy",
    "ms", "Malay",
    "ml", "Malayalam",
    "mt", "Maltese",
    "mi", "Maori",
    "mr", "Marathi",
    "mn", "Mongolian",
    "my", "Myanmar (Burmese)",
    "ne", "Nepali",
    "no", "Norwegian",
    "ps", "Pashto",
    "fa", "Persian",
    "pl", "Polish",
    "pt", "Portuguese",
    "pa", "Punjabi",
    "ro", "Romanian",
    "ru", "Russian",
    "sm", "Samoan",
    "gd", "Scots Gaelic",
    "sr", "Serbian",
    "st", "Sesotho",
    "sn", "Shona",
    "sd", "Sindhi",
    "si", "Sinhala",
    "sk", "Slovak",
    "sl", "Slovenian",
    "so", "Somali",
    "es", "Spanish",
    "su", "Sundanese",
    "sw", "Swahili",
    "sv", "Swedish",
    "tg", "Tajik",
    "ta", "Tamil",
    "te", "Telugu",
    "th", "Thai",
    "tr", "Turkish",
    "uk", "Ukrainian",
    "ur", "Urdu",
    "uz", "Uzbek",
    "vi", "Vietnamese",
    "cy", "Welsh",
    "xh", "Xhosa",
    "yi", "Yiddish",
    "yo", "Yoruba",
    "zu", "Zulu"]
    
    if(!args[0]) return message.channel.send(`Por favor proporcione el idioma`);
    //if(args[0] !== bahasa) return message.reply(`Please provided the language`);
    translate(args.slice(1).join(" "), { to: args[0] })
      .then(res => {
      
      let translateembed = new discord.MessageEmbed()
      .setColor("BLACK")
      .addField("Traducir resultado", "```" + res.text + "```")
      .setAuthor(`${client.user.username} Traductor`, client.user.displayAvatarURL({ format: "png", dynamic: true }))
      .setFooter(`Etherium Security | Traductor pedido por ${message.author.tag}` ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
      .setTimestamp()
      
        message.channel.send(translateembed);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
