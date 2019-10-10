

// This connects the clicking of the generate button to the calling of the function that generates the password.
// Source: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_addeventlistener
function generatePassword() {

       // Initial prompt for user's desired number of characters
       var userInput = prompt("Please enter a number between 8 and 128 to determine the number of characters in your password.");
       //  The user's input is a string, so we need parseInt() to turn it into a number
       var numberOfChar = parseInt(userInput);
   
   
       // Checks to see that the user has enterd a number between 8 and 128
       if (numberOfChar < 8 || numberOfChar > 128) {
           alert("Please enter a number between 8 and 128 to continue.");
           prompt("Please enter a number between 8 and 128 to determine the number of characters in your password.");
           parseInt(userInput);
       }
   
       // Asks for the user's preferences as to what they would like in their password
       var confirmLowerCase = confirm("Would you like your password to include lowercase letters?");
       var confirmUpperCase = confirm("Would you like your password to include uppercase letters?");
       var confirmSpecialChar = confirm("Would you like your password to include special characters?");
       var confirmNumbers = confirm("Would you like your password to include numbers?");
   
       if (confirmLowerCase == false && confirmUpperCase == false && confirmSpecialChar == false && confirmNumbers == false) {
           alert("Please select at least one type of character for your password.");
           confirmLowerCase = confirm("Would you like your password to include lowercase letters?");
           confirmUpperCase = confirm("Would you like your password to include uppercase letters?");
           confirmSpecialChar = confirm("Would you like your password to include special characters?");
           confirmNumbers = confirm("Would you like your password to include numbers?");
       }
    };

// Define variables for each type of character the user can choose to include in their password.
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// function password(numberOfCha r, ) {
//     var randomPassword = "";
// }

for (var i = 0; i < numberOfChar; i++) {
    if (confirmLowerCase == true) {
        password = password + (lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)));
    }

    if (confirmUpperCase == true) {
        password = password + (upperCase.charAt(Math.floor(Math.random() * upperCase.length)));
    }

    if (confirmSpecialChar == true) {
        password = password + (specialChar.charAt(Math.floor(Math.random() * specialChar.length)));
    }

    if (confirmNumbers == true) {
        password = password + (numbers.charAt(Math.floor(Math.random() * numbers.length)));
    }

}





    // This line changes the placeholder text on the page with the generated password.
//     document.getElementById("passwordDisplay").placeholder = Password;
// }\
