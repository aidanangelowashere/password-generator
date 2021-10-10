// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//various arrays
var number = ["0","1","2","3","4","5","6","7","8","9"];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capitolLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ["!", "@", "#", "$", "%", "&", "*", "<", ">", "?", "+", "-"];

var confirmLength;
var confirmCapitol;
var confirmLowercase;
var confirmSpecial;
var confirmNumber;
var parameters;

// Write password to the #password 
var password = generatePassword();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Insert while loop to ask how many characters will be included
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var confirmLength= (prompt("How many Characters would you like in your password?"));
  if(confirmLength < 8 || confirmLength > 128 ) {
    alert("Password must be at least 8 characters and no more than 128, Please try again!");
    var confirmLength =(prompt("How Many Characters would you like in your password?"));
  }


  alert('Your password will have ' +confirmLength + ' characters'); 

  //Confirm other parameters 
  var confirmCapitol = confirm("Click Confirm if you would like capitol letters in Password");
  var confirmLowercase = confirm("Click Confirm if you would like lowercase letters in your Password");
  var confirmSpecial = confirm("Click Confirm if you would like special characters in your Passowrd");
  var confirmNumber = confirm("Click Confirm if you would like numbers in your password");

  while(confirmCapitol === false && confirmLowercase === false && confirmSpecial === false && confirmNumber === false) {
    alert("You must say yes to at least one parameter");
    var confirmCapitol = confirm("Click Confirm if you would like capitol letters in Password");
    var confirmLowercase = confirm("Click Confirm if you would like lowercase letters in your Password");
    var confirmSpecial = confirm("Click Confirm if you would like special characters in your Passowrd");
    var confirmNumber = confirm("Click Confirm if you would like numbers in your password");
  }
  //4 choices
  if(confirmCapitol && confirmLowercase && confirmSpecial && confirmNumber ){
    parameters = lowerLetter.concat(capitolLetter, specialCharacter, number);
  }
  //3 choices
  if(confirmLowercase && confirmSpecial && confirmNumber){
    parameters = lowerLetter.concat(specialCharacter,number); 
  }

  if(confirmLowercase && confirmCapitol && confirmNumber){
    parameters = lowerLetter.concat(capitolLetter, number);
  }

  if(confirmLowercase && confirmCapitol && confirmSpecial){
    parameters = lowerLetter.concat(capitolLetter, specialCharacter);
  }
  if(confirmCapitol && confirmSpecial && confirmNumber){
    parameters = capitolLetter.concat(specialCharacter, number); 
  }
  // 2 choices
  if(confirmLowercase && confirmCapitol){
    parameters = lowerLetter.concat(capitolLetter);
  }

  if(confirmLowercase && confirmSpecial){
    parameters = lowerLetter.concat(specialCharacter);
  }
  
  if(confirmLowercase && confirmNumber){
    parameters = lowerLetter.concat(number);
  }

  if(confirmCapitol && confirmSpecial){
    parameters = capitolLetter.concat(specialCharacter);
  }

  if(confirmCapitol && confirmNumber){
    parameters = capitolLetter.concat(number)
  }

  if(confirmSpecial && confirmNumber){
    parameters = specialCharacter.concat(number)

  }
  // One True Option 
  if(confirmCapitol){
    parameters = capitolLetter;
  }
  if(confirmLowercase){
    parameters = lowerLetter;
  }
  if(confirmNumber){
    parameters = number;
  }
  if(confirmSpecial){
    parameters = specialCharacter;
  }
  
  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < confirmLength; i++) {
    var allChoices = parameters[Math.floor(Math.random() * parameters.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}



