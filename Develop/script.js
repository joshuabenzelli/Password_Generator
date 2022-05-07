// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var fullPassword = [];
  var passwordText = document.querySelector("#password");
  var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var LowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
  var Symbols = "!@#$?".split('');
  var Numbers = "0123456789".split('');
  var numofchardes = window.prompt("How long would you like the password to be? Pick a length between 8 and 128.");
  var numofchar = Number(numofchardes, 10);
  if (numofchar < 8 || numofchar > 128){
    alert("Please choose a length between 8 and 128.");
    return;
  }
  var upperyn = window.confirm("Would you like uppercase letters?");
  var loweryn = window.confirm("Would you like lowercase letters?");
  var symbolyn = window.confirm("Would you like any symbols?");
  var numyn = window.confirm("Would you like any numbers?");
  var password = generatePassword();
  
  
  
  
  
  function generatePassword() {
    upperyn;
    loweryn;
    symbolyn;
    numyn;
    while (fullPassword.length <= numofchar) {
      define();
    }
    function define() {
      
      if (upperyn === true) {
        var uind = Math.floor(Math.random() * UpperCase.length);
        fullPassword.push(UpperCase[uind]);
      }
      if (loweryn === true) {
        var lind = Math.floor(Math.random() * LowerCase.length);
        fullPassword.push(LowerCase[lind]);
      }
      if (symbolyn === true) {
        var sind = Math.floor(Math.random() * Symbols.length);
        fullPassword.push(Symbols[sind]);
      }
      if (numyn === true) {
        var nind = Math.floor(Math.random() * Numbers.length);
        fullPassword.push(Numbers[nind]);
      }
    }
    
  }
  passwordIsh = fullPassword.slice(0, numofchar);
  password = passwordIsh.join("");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
