const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^¨£*ù!:;,?./§µ%é'-è_çà=";
const rangeValue = document.getElementById("password-length");
const mdp = document.getElementById("password-output");

function test() {}
function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowerCase);
  if (uppercase.checked) data.push(...dataUpperCase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez séléctionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  mdp.value = password;

  mdp.select();
  document.execCommand("copy");
  generateButton.textContent = "copié";
  setTimeout(() => {
    generateButton.textContent = "Générer un mot de passe";
  }, 3000);
}

generateButton.addEventListener("click", generatePassword);
