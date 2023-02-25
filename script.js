
function generatePassword() {
  console.log();
  return// password goes here'i tried :(';
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
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
const pass_el = document.querySelector('#password span');
const length = 16;
const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
 let pass = "";
  for (var i = 0; i <= length; i++){
let rand = Math.floor(
  Math.random() * chars.length
  );
pass += chars.substring(rand, rand +1);
  }
  pass_el.innerText = pass;
  generatePassword();

}
document.getElementById('generate').addEventListener('click', () => {
passprompt()
})
  