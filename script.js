var userInput = prompt("Please enter a number between 8 and 128 to determine the number of characters in your password.");
var numberOfChar = parseInt(userInput);

if (numberOfChar < 8 || numberOfChar > 128) {
    alert("Please enter a number between 8 and 128 to continue.");
    prompt("Please enter a number between 8 and 128 to determine the number of characters in your password.");
    parseInt(userInput);
}

var confirmLowerCase = confirm("Would you like your password to include lowercase letters?");
var confirmUpperCase = confirm("Would you like your password to include uppercase letters?");
var confirmSpecialChar = confirm("Would you like your password to include special characters?");
var confirmNumbers = confirm("Would you like your password to include numbers?");

        
        

        
        
        
        
    //     var lowerCase = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //     var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    //     // In order to include certain special characters in HTML, you have to put a \ before them
    //     var specialChar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

    //     var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // var numCharacters = prompt("Please choose a number between 8 and 128 to determine how many characters your password will contain.");


    //     // Function to generate the password
    //     function password(length) {
    //         for (var i = length; i < 129; i++){
    //             // selects a random character 
    //             charAt(Math.floor(Math.random() * lowerCase.length));  
    //             charAt(Math.floor(Math.random() * upperCase.length));
    //             charAt(Math.floor(Math.random() * specialChar.length));
    //             charAt(Math.floor(Math.random() * num.length));
    //         }

    //         alert(password())
    //     }




