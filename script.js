
function generatePassword() {
  console.log();
  //return

  let passlength =parseInt(prompt('how long do you want your password to be?'))
  let hasLower =confirm('do you want lowercase characters?')
  let hasUpper =confirm('do you want Uppercase characters?')
  let hasNumbers =confirm('do you want Numbers?')
  let hasSpecChars =confirm('do you want Spec characters?')
  let options = {passlength, hasLower, hasUpper, hasNumbers, hasSpecChars}
  return options 
}
function writePassword() {
  var password = generatePassword();
  console.log (password)
  
const pass_el = document.querySelector('#password');
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
writePassword()
})
  