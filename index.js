const cowsay = require("cowsay");
const {name, school, campus} = require("./information");

console.log(cowsay.say({
    text: `I'm ${name} from ${school} ${campus}`
}))