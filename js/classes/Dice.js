// class Dice {
//
//     #color = "";
//     #faces = [];
//     constructor(color) {
//         this.#color = color; // Since the constructor sets the color, in the set color() method it will always throw an exception.
//                              // #color is never undefined as a result.
//
//     }
//
//     set color(value) {
//         if (this.#color !== undefined) {
//             throw new Error("Dice color cannot be reset");
//         }
//
//         if (!value) {
//             throw new Error("Color required");
//         }
//
//         value = value.toLowerCase();
//
//         switch (value) {
//             case "black":
//                 this.setToBlack();
//                 break;
//             case "candy":
//                 this.setToCandy();
//                 break;
//             case "fire":
//                 this.setToFire();
//                 break;
//             case "forest":
//                 this.setToForest();
//                 return;
//             case "gordon":
//                 this.setToGordon();
//                 break;
//             case "ice":
//                 this.setToIce();
//                 break;
//             default:
//                 throw new Error("Unknown color type");
//         }
//     }
//
//     get faces() {
//         return this.#faces;
//     }
//
//     setToBlack() {
//         this.#faces = [
//             "images/blackDice/black_dice-one.png",
//             "images/blackDice/black_dice-two.png",
//             "images/blackDice/black_dice-three.png",
//             "images/blackDice/black_dice-four.png",
//             "images/blackDice/black_dice-five.png",
//             "images/blackDice/black_dice-six.png"
//         ];
//     }
//
//     setToCandy() {
//         this.#faces = [
//             "images/candyDice/candy_dice-one.png",
//             "images/candyDice/candy_dice-two.png",
//             "images/candyDice/candy_dice-three.png",
//             "images/candyDice/candy_dice-four.png",
//             "images/candyDice/candy_dice-five.png",
//             "images/candyDice/candy_dice-six.png"
//         ];
//     }
//
//     setToFire() {
//         this.#faces = [
//             "images/fireDice/fire_dice-one.png",
//             "images/fireDice/fire_dice-two.png",
//             "images/fireDice/fire_dice-three.png",
//             "images/fireDice/fire_dice-four.png",
//             "images/fireDice/fire_dice-five.png",
//             "images/fireDice/fire_dice-six.png"
//         ];
//     }
//
//     setToForest() {
//         this.#faces = [
//             "images/forestDice/forest_dice-one.png",
//             "images/forestDice/forest_dice-two.png",
//             "images/forestDice/forest_dice-three.png",
//             "images/forestDice/forest_dice-four.png",
//             "images/forestDice/forest_dice-five.png",
//             "images/forestDice/forest_dice-six.png"
//         ];
//     }
//
//     setToGordon() {
//         this.#faces = [
//             "images/gordonDice/gordon_dice-one.png",
//             "images/gordonDice/gordon_dice-two.png",
//             "images/gordonDice/gordon_dice-three.png",
//             "images/gordonDice/gordon_dice-four.png",
//             "images/gordonDice/gordon_dice-five.png",
//             "images/gordonDice/gordon_dice-six.png"
//         ];
//     }
//
//     setToIce() {
//         this.#faces = [
//             "images/iceDice/ice_dice-one.png",
//             "images/iceDice/ice_dice-two.png",
//             "images/iceDice/ice_dice-three.png",
//             "images/iceDice/ice_dice-four.png",
//             "images/iceDice/ice_dice-five.png",
//             "images/iceDice/ice_dice-six.png"
//         ];
//     }
// }

// export class Dice {
//
//     #color = "";
//     #faces = [];
//     constructor(color) {
//         this.#color = undefined;
//         // this.setColor(this.#color); // causes the first check to throw an error in setColor(color);
//         this.#setColor(color);
//     }
//
//     #setColor(color) {
//         if (this.#color !== undefined) {
//             throw new Error("Dice color cannot be reset");
//         }
//
//         if (!color) {
//             throw new Error("Color required");
//         }
//
//         this.#color = color.trim().toLowerCase();
//
//         switch (this.#color) {
//             case "black":
//                 this.#setToBlack();
//                 break;
//             case "candy":
//                 this.#setToCandy();
//                 break;
//             case "fire":
//                 this.#setToFire();
//                 break;
//             case "forest":
//                 this.#setToForest();
//                 break;
//             case "gordon":
//                 this.#setToGordon();
//                 break;
//             case "ice":
//                 this.#setToIce();
//                 break;
//             default:
//                 throw new Error("Unknown color type");
//         }
//     }
//
//     get color() {
//         return this.#color;
//     }
//
//     get faces() {
//         return this.#faces;
//     }
//
//     #setToBlack() {
//         this.#faces = [
//             "images/dices/blackDice/black_dice-one.png",
//             "images/dices/blackDice/black_dice-two.png",
//             "images/dices/blackDice/black_dice-three.png",
//             "images/dices/blackDice/black_dice-four.png",
//             "images/dices/blackDice/black_dice-five.png",
//             "images/dices/blackDice/black_dice-six.png"
//         ];
//     }
//
//     #setToCandy() {
//         this.#faces = [
//             "images/dices/candyDice/candy_dice-one.png",
//             "images/dices/candyDice/candy_dice-two.png",
//             "images/dices/candyDice/candy_dice-three.png",
//             "images/dices/candyDice/candy_dice-four.png",
//             "images/dices/candyDice/candy_dice-five.png",
//             "images/dices/candyDice/candy_dice-six.png"
//         ];
//     }
//
//     #setToFire() {
//         this.#faces = [
//             "images/dices/fireDice/fire_dice-one.png",
//             "images/dices/fireDice/fire_dice-two.png",
//             "images/dices/fireDice/fire_dice-three.png",
//             "images/dices/fireDice/fire_dice-four.png",
//             "images/dices/fireDice/fire_dice-five.png",
//             "images/dices/fireDice/fire_dice-six.png"
//         ];
//     }
//
//     #setToForest() {
//         this.#faces = [
//             "images/dices/forestDice/forest_dice-one.png",
//             "images/dices/forestDice/forest_dice-two.png",
//             "images/dices/forestDice/forest_dice-three.png",
//             "images/dices/forestDice/forest_dice-four.png",
//             "images/dices/forestDice/forest_dice-five.png",
//             "images/dices/forestDice/forest_dice-six.png"
//         ];
//     }
//
//     #setToGordon() {
//         this.#faces = [
//             "images/dices/gordonDice/gordon_dice-one.png",
//             "images/dices/gordonDice/gordon_dice-two.png",
//             "images/dices/gordonDice/gordon_dice-three.png",
//             "images/dices/gordonDice/gordon_dice-four.png",
//             "images/dices/gordonDice/gordon_dice-five.png",
//             "images/dices/gordonDice/gordon_dice-six.png"
//         ];
//     }
//
//     #setToIce() {
//         this.#faces = [
//             "images/dices/iceDice/ice_dice-one.png",
//             "images/dices/iceDice/ice_dice-two.png",
//             "images/dices/iceDice/ice_dice-three.png",
//             "images/dices/iceDice/ice_dice-four.png",
//             "images/dices/iceDice/ice_dice-five.png",
//             "images/dices/iceDice/ice_dice-six.png"
//         ];
//     }
// }

// ChatGPT revised version:
// class Dice {
//     #color;
//     #faces = [];
//
//     constructor() {
//         this.#color = undefined; // start uninitialized
//     }
//
//     setColor(color) {
//         if (this.#color !== undefined) {
//             throw new Error("Dice color cannot be reset");
//         }
//         if (!color) {
//             throw new Error("Color required");
//         }
//
//         this.#color = color.toLowerCase();
//         this.#faces = this.#createFaces(this.#color);
//     }
//
//     get faces() {
//         return this.#faces;
//     }
//
//     #createFaces(color) {
//         const folderMap = {
//             black: "blackDice",
//             candy: "candyDice",
//             fire: "fireDice",
//             forest: "forestDice",
//             gordon: "gordonDice",
//             ice: "iceDice"
//         };
//
//         const folder = folderMap[color];
//         if (!folder) throw new Error("Unknown color type");
//
//         return Array.from({ length: 6 }, (_, i) =>
//             `images/${folder}/${folder.split("Dice")[0]}_dice-${["one","two","three","four","five","six"][i]}.png`
//         );
//     }
// }

// UPDATE 3:
// - In this UPDATE version, UPDATE 3, I used a switch statement to filter out and
//   guard against invalid colors passed into the constructor.
// export class Dice {
//
//     #color;
//     #faces = [];
//     constructor(color) {
//         this.#setColor(color);
//     }
//
//     #setColor(color) {
//         if (this.#color !== undefined) {
//             throw new Error("Dice color cannot be reset");
//         }
//
//         if (!color) {
//             throw new Error("Color required");
//         }
//
//         this.#color = color.trim().toLowerCase();
//
//         // Compared to the previous version, the logic of each case removed the branching to each of the
//         // setToColor() method and removed all breaks but the last one in case "ice".
//         switch (this.#color) {
//             case "black":
//             case "candy":
//             case "fire":
//             case "forest":
//             case "gordon":
//             case "ice":
//                 break;
//             default:
//                 throw new Error("Unknown color type");
//         }
//
//         // Moved the assignment of the this.#faces from each of the setToColor() methods to a single assignment below.
//         // Used string literals string interpolation avoiding repeated code. At least better than the previous version.
//         this.#faces = [
//             `images/dices/${this.#color}Dice/${this.#color}_dice-one.png`,
//             `images/dices/${this.#color}Dice/${this.#color}_dice-two.png`,
//             `images/dices/${this.#color}Dice/${this.#color}_dice-three.png`,
//             `images/dices/${this.#color}Dice/${this.#color}_dice-four.png`,
//             `images/dices/${this.#color}Dice/${this.#color}_dice-five.png`,
//             `images/dices/${this.#color}Dice/${this.#color}_dice-six.png`,
//         ];
//     }
//
//     get color() {
//         return this.#color;
//     }
//
//     get faces() {
//         return this.#faces;
//     }
// }

// ChatGPT revised version.
// export class Dice {
//     #color;
//     #faces = [];
//
//     static #validColors = new Set([
//         "black", "candy", "fire", "forest", "gordon", "ice"
//     ]);
//
//     constructor(color) {
//         this.#setColor(color);
//     }
//
//     #setColor(color) {
//         if (this.#color !== undefined) {
//             throw new Error("Dice color cannot be reset");
//         }
//         if (!color) {
//             throw new Error("Color required");
//         }
//
//         this.#color = color.trim().toLowerCase();
//
//         if (!Dice.#validColors.has(this.#color)) {
//             throw new Error("Unknown color type");
//         }
//
//         const faces = ["one", "two", "three", "four", "five", "six"];
//
//         this.#faces = faces.map(face =>
//             `images/dices/${this.#color}Dice/${this.#color}_dice-${face}.png`
//         );
//     }
//
//     get color() {
//         return this.#color;
//     }
//
//     get faces() {
//         return this.#faces;
//     }
// }

// UPDATE 4:
// - In this version I replaced the switch statement to a set to handle invalid dice color checks.
//
export class Dice {

    #color;
    #faces = [];
    constructor(color) {
        this.#setColor(color);
    }

    #setColor(color) {
        if (this.#color !== undefined) {
            throw new Error("Dice color cannot be reset");
        }

        if (!color) {
            throw new Error("Color required");
        }

        this.#color = color.trim().toLowerCase();

        // Compared to the previous version, the logic of each case removed the branching to each of the
        // setToColor() method and removed all breaks but the last one in case "ice".
        //
        // switch (this.#color) {
        //     case "black":
        //     case "candy":
        //     case "fire":
        //     case "forest":
        //     case "gordon":
        //     case "ice":
        //         break;
        //     default:
        //         throw new Error("Unknown color type");
        // }

        // let colors = new Set("black", "candy", "fire", "forest", "gordon", "ice"); // Does not work.
        // - JavaScript returns an error if I attempt the code above is uncommented.
        // - Sets takes in iterables, which includes: stings, sets, maps and array.
        //   - Previously, it was a list of strings, strings work, however, the Set constructor only takes
        //     one argument, so it threw an exception;
        //   - Whereas below, it is one iterable array - of strings.
        //
        let colors = new Set(["black", "candy", "fire", "forest", "gordon", "ice"]); // Works.

        if (!colors.has(this.#color)) {
            throw new Error("Unknown color type: " + this.#color);
        } else {
            // Moved the assignment of the this.#faces from each of the setToColor() methods to a single assignment below.
            // Used string literals string interpolation avoiding repeated code. At least better than the previous version.
            this.#faces = [
                `images/dices/${this.#color}Dice/${this.#color}_dice-one.png`,
                `images/dices/${this.#color}Dice/${this.#color}_dice-two.png`,
                `images/dices/${this.#color}Dice/${this.#color}_dice-three.png`,
                `images/dices/${this.#color}Dice/${this.#color}_dice-four.png`,
                `images/dices/${this.#color}Dice/${this.#color}_dice-five.png`,
                `images/dices/${this.#color}Dice/${this.#color}_dice-six.png`,
            ];
        }
    }

    get color() {
        return this.#color;
    }

    get faces() {
        return this.#faces;
    }
}