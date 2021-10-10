// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//various arrays
var number = ["0","1","2","3","4","5","6","7","8","9"];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capitolLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ["!", "@", "#", "$", "%", "&", "*", "<", ">", "?", "+", "-"];

var confirmLength = "";
var confirmCapitol;
var confirmLowercase;
var confirmSpecial;
var confirmNumber;

// Write password to the #password input
function writePassword() {
  var confirmLength= (prompt("How many Characters would you like in your password?"));

  var confirmCapitol
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
