import greet from "./greet.js";

import chalk from "chalk";

import fun from "everyday-fun"

import figlet from 'figlet';

//greeting Everyone
console.log(chalk.black.bgYellow.bold(greet('Poroto')))

//Welcome to the riddler
const riddle = (fun.getRandomRiddle());

console.log('Riddle Me:' + chalk.green.bold (riddle.riddle));

//show riddle answe after 6 seconds

setTimeout(function(){
    console.log('Answer: ' + chalk.cyanBright.bold(riddle.answer));
}, 6000);

//figlet Font Module

figlet('Haha Riddle...', function(err, result){
    console.log(result);
})




// console.log(greet('Poroto'));
// console.log(greet('Archie'));