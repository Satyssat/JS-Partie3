let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];

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

//----------------------------------
// Méthode Objet
//------------------------------------
// document.body.innerHTML = data
//   // .filter((user) => user.admin === true)
//   // .filter((user) => user.pseudo.includes("Den"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) =>
//       `
//     <div class="user-card">
//         <h2>${user.pseudo}</h2>
//         <p>Age :${user.age} ans</p>
//         <p>Technos :${user.technos}</p>
//         <p>status : ${user.admin ? "Modérateur" : "Membre"}</p>
//     </div>
//     `
//   )
//   .join("");

//-------------------------
// Dates
//--------------------------

let date = new Date();
// console.log(date);
// Timestamp

let timestamp = Date.parse(date);
// console.log(timestamp);

// IsoString

// console.log(date.toISOString());
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-Fr", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}

// console.log(dateParser(date));

//-------------------------
// Destructuring
//--------------------------

let moreData = {
  destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData; // destructuration

// console.log(moreData.destVar[1]); // avant destructuration

// console.log(destVar[1]); // après destructuration

let array5 = [90, 80, 70];

let [x, y, z] = array5;

// console.log(x);
// console.log(y);
// console.log(z);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  [y, m, d] = newDate.split("-");
  return [y, m, d].join("/");
};

// console.log(dateDestructuring(iso));

//----------------
// Datasets
//----------------

const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
// h3.forEach((language) => console.log(language.dataset.lang));

//----------------
//Regex
//----------------

let mail = "couyssat.satya@gmail.com";
// console.log(mail.search(/dkljdia/));
// console.log(mail.replace(/couy/, "yo"));
console.log(mail.match(/Couy/i));
