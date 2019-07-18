// import {startTime, checkTime} from "./clock"
// let name = prompt('Quel est votre nom?');


let word
name = "Fabezio"
let now = new Date().getHours()
let moment

const greeting = `Bon${now>17? moment="soir" : moment = "jour"} ${name ? word = name+" " : word = ''}!`

document.getElementById('greeting').innerHTML = greeting 
