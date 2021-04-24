const Discord = require("discord.js")
const Minesweeper = require ("discord.js-minesweeper");

module.exports = {
  nombre: 'buscaminasv2',
  alias: [],
  desc: "Juega al buscaminas personalizado por ti!",
  run: async(client, message, args) => {

  
    const rows = parseInt(args[0]);
    const columns = parseInt(args[1]);
    const mines = parseInt(args[2]);
 
    if (!rows) {
      return message.reply('Ingrese filas ** use números **');
    }
 
    if (!columns) {
      return message.reply('Ingrese el número de coulumns ** use números **');
    }
 
    if (!mines) {
      return message.reply('Ingrese el número de bombas ** use el número *');
    }
 
    const minesweeper = new Minesweeper({ rows, columns, mines });
    const matrix = minesweeper.start();
 
    return matrix
      ? message.channel.send(matrix)
      : message.reply('Ingresaste los datos incorrectos');
  }
}