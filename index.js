const cowsay = require("cowsay");
const info = require("./information.js");

console.log(cowsay.say({
    text: `I'm ${info.name} from ${info.school} ${info.campus}`
}))