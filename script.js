// Assignment code here

// start with box hidden
document.getElementById("myDIV").style.display = "none";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var textarea = document.getElementById("password");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  textarea.textContent = "kaialsh"
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

// Add event listener to generate button
generateBtn.addEventListener("click", myFunction);




