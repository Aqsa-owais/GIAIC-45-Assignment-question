"use strict";
//question 3
//Name Cases: Store a person’s name in a variable, and then print that person’s
//name in lowercase, uppercase, and titlecase
Object.defineProperty(exports, "__esModule", { value: true });
var _name = "aQsa oWais";
var upperCase = _name.toUpperCase();
var lowerCase = _name.toLocaleLowerCase();
const titleCase = () => {
    var _split = lowerCase.split(' ');
    for (let i = 0; i < _split.length; i++) {
        _split[i] = _split[i].charAt(0).toUpperCase() + _split[i].slice(1);
    }
    return _split.join(" ");
};
console.log(upperCase);
console.log(lowerCase);
console.log(titleCase());
