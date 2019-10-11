function generatePassword() {

    // Initial prompt for user's desired number of characters.
    var userInput = prompt("Please enter a number between 8 and 128 to determine the number of characters in your password.");
    //  The user's input is a string, so we need parseInt() to turn it into a number.
    var numberOfChar = parseInt(userInput);

    // Check to see that the user has enterd a number between 8 and 128.
    if (numberOfChar < 8 || numberOfChar > 128) {
        alert("Please enter a number between 8 and 128 to continue.");
        prompt("Please enter a number between 8 and 128 to determine the number of characters in your password.");
        parseInt(userInput);
    }

    // Ask for the user's preferences as to what characters they would like in their password.
    var confirmLowerCase = confirm("Would you like your password to include lowercase letters?");
    var confirmUpperCase = confirm("Would you like your password to include uppercase letters?");
    var confirmSpecialChar = confirm("Would you like your password to include special characters?");
    var confirmNumbers = confirm("Would you like your password to include numbers?");

    // Check that the user has selected at least one type of character.
    if (confirmLowerCase == false && confirmUpperCase == false && confirmSpecialChar == false && confirmNumbers == false) {
        alert("Please select at least one type of character for your password.");
        confirmLowerCase = confirm("Would you like your password to include lowercase letters?");
        confirmUpperCase = confirm("Would you like your password to include uppercase letters?");
        confirmSpecialChar = confirm("Would you like your password to include special characters?");
        confirmNumbers = confirm("Would you like your password to include numbers?");
    }

    // Define variables for each type of character the user can choose to include in their password.
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    // Set the password and characters variables to empty strings for now.
    var password = "";
    var characters = "";

    // Add a random lowercase letter if desired by the user.
    if (confirmLowerCase == true) {
        password = password + (lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)));
        // Subtract 1 from the number of characters desired since we are adding a random character to the string above
        numberOfChar--;
        // Concatenate the variables
        characters = characters + lowerCase;
    }

    if (confirmUpperCase == true) {
        password = password + (upperCase.charAt(Math.floor(Math.random() * upperCase.length)));
        numberOfChar--;
        characters = characters + upperCase;
    }

    if (confirmSpecialChar == true) {
        password = password + (specialChar.charAt(Math.floor(Math.random() * specialChar.length)));
        numberOfChar--;
        characters = characters + specialChar;
    }

    if (confirmNumbers == true) {
        password = password + (numbers.charAt(Math.floor(Math.random() * numbers.length)));
        numberOfChar--;
        characters = characters + numbers;
    }

    // For loop adds aditional random characters until the desired number of characters is reached.
    for (var i = 0; i < numberOfChar; i++) {
        password = password + (characters.charAt(Math.floor(Math.random() * characters.length)));
    }

    // Note - if there were any code after this within this function, it would not run. 
    return password;
}

// When the user clicks the button, the password element
document.querySelector("#generate").addEventListener("click", function(){
    password = generatePassword();
    //    This line changes the placeholder text on the page with the generated password.
    document.getElementById("passwordDisplay").placeholder = password;
});

// Create variables for copy button and password in text area
// var copyButton = document.querySelector("#copy");
// var pwdTextArea = document.querySelector("#passwordDisply");

// Copy to clipboard button -- **Not working**
// function copyToClipboard(){
//     document.getElementById("passwordDisplay").select();
//     document.execCommand("copy");
// }

// copyButton.addEventListener("click", function(){
//     // alert is working
//     alert("Your password has been copied to the clipboard.");
// });


