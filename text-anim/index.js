// Rappel des types de données

let sring = "chaîne";
let number = 25;
let boolean = true;
let maVariable; // type = Undefiened

// Tableaux

let array = ["Bordeaux", "Toulouse", "Nantes"];

// console.log(array[1]); // Affiche Toulouse

// console.log(array[1][4]); // Affiche o ( 4ème index de "toulouse")

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// console.log(objet.age);

// objet.adresse = "2 Place Du Docteur Brugel";
// console.log(objet);

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

// Structures de controle ( if, else ... )

// ------------------------------------------------------------------------

if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // console.log(data[1].pseudo + " est plus agée que " + data[0].pseudo);
}

// valeur à tester ? si vrai: si faux

// data[0].age > data[1].age ? console.log("Denis") : console.log("Samia");

// WHILE

let w = 0;
while (w < 10) {
  // console.log(array[w]);
  w++;
}

// FOR

for (const user of data) {
  // document.body.innerHTML += `<h4>${user.pseudo}</h4>`;
  // document.body.innerHTML += `<li>${user.age}ans ---- admin : ${user.admin}</li>`;
}

for (i = 0; i < data.length; i++) {
  // console.log(data[i].pseudo);
}

// SWITCH

document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "Javascript":
      document.body.style.background = "white";
      break;
    case "Php":
      document.body.style.background = "yellowgreen";
      break;
    case "Python":
      document.body.style.background = "chocolate";
      break;
    default:
      null;
  }
});

// TEXT ANIM

const target = document.getElementById("target");
let tableau = ["développeur", "photographe", "juriste"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = tableau[wordIndex][letterIndex];
  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= tableau.length) {
      wordIndex = 0;
      letterIndex = 0;
    }
    if (letterIndex < tableau[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 80);
};

loop();
