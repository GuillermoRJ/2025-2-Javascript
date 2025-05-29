
/*
ya no se requiere el sig codigo al tener chalk
se tiene que cambiar de ".js" a ".mjs"
const saludar = require('./saludo');

console.log(saludar("Mf"));
*/ 

import chalk from 'chalk';
import saludar from './saludo.js';
import inquirer from 'inquirer';

inquirer.prompt([
  {
    type: 'input',
    name: 'nombre',
    message: '¿Cómo te llamas?'
  },
  {
    type: 'list',
    name: 'color',
    message: '¿Cuál es tu color favorito?',
    choices: ['Rojo', 'Verde', 'Azul']
  }
]).then(respuestas => {
  console.log(saludar(respuestas.nombre));
  console.log(`Tu color favorito es ${respuestas.color}`);
});

//console.log(chalk.blue(saludar("Memo")));

//chalk.(color que queramos)