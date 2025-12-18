// export class Player {
//
//     #name = "";
//     #avatar = {};
//     #Dice = null;
//     constructor({name, avatar, Dice}) { // Enforces, passed arguments positions.
//         this.#name = name; // This calls the setter method, if one exists, otherwise constructor auto sets property.
//         this.#avatar = avatar;
//         this.#Dice = Dice;
//     }
//
//     // set name(name) { // will cause an infinite loop, calling itself over and over again.
//     //     if (name.length === 0) {
//     //         throw new Error("Name is required. Cannot be left empty.");
//     //     }
//     //
//     //     this.name = name;
//     // }
//
//     // In this version of the setter, it allows for name to be reassigned.
//     // set name(value) { // used backing field to avoid recursive loop.
//     //     if (!value || value.trim().length === 0) { // !value catches both 'null' and 'undefined' errors.
//     //         throw new Error("Name is required. Cannot be empty.");
//     //     }
//     //     this.#name = value;
//     // }
//
//     // In this version, reassignment is not possible and will throw an error if tried.
//     set name(value) {
//         if (this.#name !== undefined) { // Checks of name is already assigned, if so throw error.
//             throw new Error("Name cannot be reset");
//         }
//
//         if (!value) { // Guards against missing value (no name passed into constructor) or null value passed in.
//             throw new Error("Name required");
//         }
//
//         // #name cannot be accessed from outside of class, however, without the first if-statement check
//         // #name can still be reassigned within the class itself - therefore need to enforce the set-once rule.
//         this.#name = value;
//     }
//
//     get name() {
//         return this.#name;
//     }
//
//     set avatar(value) {
//         if (this.#avatar !== undefined) {
//             throw new Error("Avatar cannot be reset");
//         }
//
//         if (!value) {
//             throw new Error("Avatar required");
//         }
//
//         this.#avatar = value;
//     }
//
//     get avatar() {
//         return this.#avatar;
//     }
//
//     set Dice(value) {
//         if (this.#Dice !== undefined) {
//             throw new Error("Dice cannot be reset");
//         }
//
//         if (!value) {
//             throw new Error("Dice required");
//         }
//
//         this.#Dice = value;
//     }
//
//     get dice() {
//         return this.#Dice;
//     }
// }

import { Dice } from "./Dice.js";

export class Player {
    #name;
    #avatar;
    #dice;

    constructor({ name, avatar, dice }) {
        // Use setters to enforce rules immediately
        this.name = name;
        this.avatar = avatar;
        this.dice = dice;
    }

    // ----- Name -----
    set name(value) {
        if (this.#name !== undefined) {
            throw new Error("Name cannot be reset");
        }
        if (!value || value.trim() === "") {
            throw new Error("Name is required");
        }
        this.#name = value;
    }

    get name() {
        return this.#name;
    }

    // ----- Avatar -----
    set avatar(value) {
        if (this.#avatar !== undefined) {
            throw new Error("Avatar cannot be reset");
        }
        if (!value || value.trim() === "") {
            throw new Error("Avatar is required");
        }
        this.#avatar = value;
    }

    get avatar() {
        return this.#avatar;
    }

    // ----- Dice -----
    set dice(value) {
        if (this.#dice !== undefined) {
            throw new Error("Dice cannot be reset");
        }
        if (!(value instanceof Dice)) {
            throw new Error("Dice must be a Dice instance");
        }
        this.#dice = value;
    }

    get dice() {
        return this.#dice;
    }
}