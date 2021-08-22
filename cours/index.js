let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42");
// console.log(eval(parseInt("42") + 2));
// console.log(isNaN(string2));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);
// console.log(string2);

// console.log(string2.indexOf("a"));

// let newString2 = string2.slice(5, 17);
// console.log(newString2);

// console.log(string2.split("i"));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

// ------------------
// méthode NUMBER
//-------------------

let number = 42.15648;

// console.log(number);
// console.log(number.toFixed(2));

//----------------
// Math
//----------------

// console.log(Math.PI);
// console.log(Math.round(4.4));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.2));

// console.log(Math.floor(Math.random() * 50));

//--------------
//Méthode ARRAY
//--------------

let array1 = ["Javascript", "Python", "Php"];
let array2 = ["Ruby", "Solidity"];

// let newArray = [...array1, ...array2];   creer un tableau avec donnée array 1 et array 2 dedans
// let newArray = array1.concat(array2);     //
// console.log(newArray);

// console.log(array1.join(" et puis ")); // met "et puis" entre chaque élément du tableau

// console.log(array1.every((language) => language == "Php")); // est-ce que Php existe dans tous les éléments du tableau
// console.log(array1.some((language) => language == "Php")); // est-ce que Php existe dans un des élément du tableau

//-----------------------------
// IMPORTANT
//---------------------------------

let arrayNumber = [4, 74, 28, 12, 1];

// console.log(arrayNumber.reduce((x, y) => x + y));

arrayNumber.push(17);
// console.log(arrayNumber);

// FILTER, SORT, MAP

// console.log(arrayNumber.filter((number) => number > 10));

// console.log(arrayNumber.sort((a, b) => b - a)); //du plus petit au plus grand

// document.body.innerHTML = arrayNumber.map((number) => `<li>${number}`).join("");
