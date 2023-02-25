
// Assignment code here
function generatePassword() {
  console.log();
  return //"generated password will go here"
}
let hasPasslength
let hasLower
let hasUpper
let hasNumbers
let hasSpecChars

const passprompt = () => {
  passlength =parseInt(prompt('how long do you want your password to be?'))
  hasLower =confirm('do you want lowercase characters?')
  hasUpper =confirm('do you want Uppercase characters?')
  hasNumbers =confirm('do you want Numbers?')
  hasSpecChars =confirm('do you want Spec characters?')
  console.log(passlength, hasLower, hasUpper, hasNumbers, hasSpecChars)
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
const pass_el = document.querySelector('#password span');
const length = 16;
const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
 let pass = "";
  for (var i = 0; i <== length; i++){
}

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.getElementById('generate').addEventListener('click', () => {
passprompt()
})