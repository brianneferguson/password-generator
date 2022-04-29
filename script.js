// Assignment code here
 var specialCharacters = ["!","@","#","$","%","^","&","*",]
 var lowercases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 var uppercases = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
 var numbers = [,"1","2","3","4","5","6","7","8","9","0"]

function getPasswordReqs(){
  var length = parseInt(prompt("how long do you want your password?"))
  if(length<8){
    alert("password must be at least 8 characters")
    return null
  }
  if(isNaN(length)){
    alert("password must be a valid number")
    return null
  }
  if(length>128){
    alert("password cannot be over 128 characters")
    return null
  }
  var specialCharacter = confirm("click ok if you want special characters in your password")

  var lowercase = confirm("click ok if you want to include lowercase character")

  var uppercase = confirm("click ok if you want to include uppercase characters")

  var number = confirm("click ok if you want to include a number") 

  if(specialCharacter=== false&& lowercase===false&& uppercase===false&& number===false){
    alert("you must select at least one character type")
  
  }
  var passwordCriteria = {
    length: length, 
    specialCharacter: specialCharacter,
    lowercase: lowercase,
    uppercase: uppercase,
    number: number
  }

  return passwordCriteria
}
function randomize(array) {
 var randomIndex = Math.floor(Math.random()*array.length)
 var randomElement = array[randomIndex]
 return randomElement 
}
function createPassword(){
  var options = getPasswordReqs()
var results = []
var charatersPossible = []
var charactersGaurnteed = []

if (options.specialCharacter) {
  charatersPossible = charatersPossible.concat(specialCharacters) 
  charactersGaurnteed.push(randomize(specialCharacters))
  
}
if (options.lowercase) {
  charatersPossible = charatersPossible.concat(lowercases)
  charactersGaurnteed.push(randomize(lowercases))
}
if (options.uppercase) {
  charatersPossible = charatersPossible.concat(uppercases)
  charactersGaurnteed.push(randomize(uppercases))
  
}
if (options.number) {
  charatersPossible = charatersPossible.concat(numbers)
  charactersGaurnteed.push(randomize(numbers))
  
}
for (let i = 0; i < options.length; i++) {
  var possibleCharacters = randomize(charatersPossible) 
  results.push(possibleCharacters) 
  
  
}
for (let i = 0; i < charactersGaurnteed.length; i++) {
  results[i] = charactersGaurnteed[i]
  
}
console.log(results.join(""))
return results.join("")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
