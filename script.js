// Assignment code here

// start with box hidden
document.getElementById("myDIV").style.display = "none";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var textarea = document.getElementById("password");

var submitBtn = document.querySelector("#submit");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;

}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function submitFunction() {
  var passLength = document.getElementById("passLength").value;

  var numChars = document.getElementById("numChars").checked;
  var specChars = document.getElementById("specChars").checked;
  var uppChars = document.getElementById("uppChars").checked;
  var lowChars = document.getElementById("lowChars").checked;

  // Testing userinput
  //console.log("length: " + passLength);
  //console.log(specChars);
  //console.log(numChars);
  //console.log(lowChars);
  //console.log(uppChars);
  
  var selectedChars = [];
  if (specChars){
    selectedChars = selectedChars.concat(specialCharacters);
  }

  if (numChars){ 
    selectedChars = selectedChars.concat(numericalCharacters);
  }

  if (lowChars) {
    selectedChars = selectedChars.concat(lowercaseCharacters);
  }

  if (uppChars) {
    selectedChars = selectedChars.concat(uppercaseCharacters);
  }
  
  //console.log(selectedChars);

  var output = "";


  for (var i = 0; i < passLength; i++) {

    var random = Math.floor(Math.random() * selectedChars.length);

    //console.log(random, selectedChars[random])

    output = output + selectedChars[random];

    
  }

//console.log(output);
textarea.textContent = output


}










// Creates an array of special characters.
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~", "`", "-", "_", "."];
// Creates an array of single-digit numbers.
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Creates an array of lowercase characters.
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Creates an array of uppercase characters.
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];




// Add event listener to generate button
generateBtn.addEventListener("click", myFunction);

submitBtn.addEventListener("click", submitFunction);




