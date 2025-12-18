import { Dice } from "./classes/Dice.js";
import { Player } from "./classes/Player.js";

const dice = new Dice("grey");
console.log(dice.faces);

// const player = new Player("Alexis", dice);

// In the previous Player class version, if I attempted to instantiate and object
// with the intention of omitting the Avatar, the setter for the avatar does
// not get executed, therefore does not throw the expected exception error message.
// - By passing a JS object literal I can enforce the exceptions to be thrown when
//   any of the arguments are omitted and eliminates value/variable shifting.
// -
const player = new Player (
    { // JS object literal.
        name: 'Alexis',
        avatar: "Batman",
        dice: dice
    }
);

console.log(player.dice);