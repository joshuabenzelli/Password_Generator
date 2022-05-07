// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // I had to make sure that the function ended if the user
  // asked for a password out of parameters specified.
  var numofchardes = window.prompt("How long would you like the password to be? Pick a length between 8 and 128.");
  var numofchar = Number(numofchardes, 10);
  if (numofchar < 8 || numofchar > 128){
    alert("Please choose a length between 8 and 128.");
    return;
  }
  // Defined the rest of my variables, then proceeded to my generatePassword function
  var fullPassword = [];
  var passwordText = document.querySelector("#password");
  var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var LowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
  var Symbols = "!@#$?".split('');
  var Numbers = "0123456789".split('');
  var upperyn = window.confirm("Would you like uppercase letters?");
  var loweryn = window.confirm("Would you like lowercase letters?");
  var symbolyn = window.confirm("Would you like any symbols?");
  var numyn = window.confirm("Would you like any numbers?");
  var password = generatePassword();
  
  
  
  
  
  function generatePassword() {
    // Here I just called my 'Yes/no' variables
    upperyn;
    loweryn;
    symbolyn;
    numyn;

    // Since I only want the function 'define' to run as many times necessary to 
    // meet the specified password length, I used a while loop to ensure
    // that it doesn't run more than asked.
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
 
  // Here I'm trying to make the output the proper length, 
  // and convert it into a single element instead of displaying all of the array elements separated by commas.
  passwordIsh = fullPassword.slice(0, numofchar);
  password = passwordIsh.join("");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
