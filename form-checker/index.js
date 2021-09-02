const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  `input[type="text"], input[type="password"]`
);

let pseudo, email, password, confirmPass;
const progressBar = document.getElementById("progress-bar");

//---------------
//---------------
//---------------
//---------------
//---------------
//---------------                     FUNCTION errorDisplay
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------                     PSEUDO
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------
const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit contenir entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------                     EMAIL
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------
const mailChecker = (value) => {
  if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------                     PASSWORD
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------
const passwordChecker = (value) => {
  progressBar.classList = "";
  if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
    errorDisplay(
      "password",
      "Longueur minimum : 8 dont 1 majuscule, 1 chiffre et 1 minuscule"
    );
    password = null;
    progressBar.classList.add("progressRed");
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) confirmChecker("confirmPass");
};
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------                     CONFIRMPASSWORD
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------
const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------                     FOREACH INPUT
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        mailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
    }
  });
});

//---------------
//---------------
//---------------
//---------------
//---------------
//---------------                     SUBMIT
//---------------
//---------------
//---------------
//---------------
//---------------
//---------------

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (pseudo && email && password && confirmPass) {
    const data = {
      pseudo: pseudo,
      email: email,
      password: password,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));
    progressBar.classList = "";

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("inscription validée");
  } else {
    alert("Veuillez remplir tous les champs");
  }
});
