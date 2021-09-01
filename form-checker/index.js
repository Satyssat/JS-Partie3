const inputs = document.querySelectorAll(
  `input[type="text"], input[type="password"]`
);

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelectorAll("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container" > span);

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit contenir entre 3 et 20 caractères");
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
  } else {
    errorDisplay("pseudo", "", true);
  }
};
const mailChecker = (value) => {
  console.log(value);
};
const passwordChecker = (value) => {
  console.log(value);
};
const confirmChecker = (value) => {
  console.log(value);
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "mail":
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
