let password = document.getElementById("password");
let length = 12;
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters =  upperCaseLetters.toLowerCase();
var numbers = "0123456789";
var specialCharacters = "@_-#$%^&*";

let allChars = upperCaseLetters + lowercaseLetters + numbers + specialCharacters;

function passwordgenerate(){
    var passwordtext= "";
    passwordtext += upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
    passwordtext += lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)];
    passwordtext += numbers[Math.floor(Math.random()*numbers.length)];
    passwordtext += specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

    while(length > passwordtext.length){
        passwordtext += allChars[Math.floor(Math.random()*allChars.length)];
    }
    
    
    password.value = passwordtext;

}
function copypass(){
    password.select();
    document.execCommand('copy');
    alert("Password copied to clipboard!");
}