const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  nombre: 'ruleta',
  alias: ["rlt"],
  desc: "Gira la ruleta!",
  run: async(client, message, args) => { 

  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)

let random = Math.floor(Math.random() * 37);

let moneyhelp = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`\<a:check:785517711504441344> Especifique una cantidad para apostar | $ruleta <color> <dinero>`);

let moneymore = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`\<a:check:785517711504441344> Estás apostando más de lo que tienes`);

let colorbad = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`\<a:check:785517711504441344> Especifica un color | :red_square: Rojo [1.5x] :black_large_square: Negro [2x] :green_square: Verde [15x]`);


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "n" || colour.includes("negro")) colour = 0;
    else if (colour == "r" || colour.includes("rojo")) colour = 1;
    else if (colour == "v" || colour.includes("verde")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // Green
        money *= 15
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed1 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:green_square: Ganaste! ${money} monedas\n\nMultiplicador 15x`);
        message.channel.send(moneyEmbed1)
        console.log(`${message.author.tag} Ganaste! \<a:money:785313382206799893> ${money} en verde`)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:red_square: Ganaste! \<a:money:785313382206799893> ${money} monedas\n\nMultiplicador 1.5x`);
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:black_large_square: Ganaste! \<a:money:785313382206799893> ${money} monedas\n\nMultiplicador 2x`);
        message.channel.send(moneyEmbed3)
    } else { // Wrong
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\<a:check:785517711504441344> Perdiste! \<a:money:785313382206799893> ${money} monedas\n\nMultiplicador 0x`);
        message.channel.send(moneyEmbed4)
    }
}


  }