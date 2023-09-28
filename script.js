console.log("connected");


function randomPassword(length) {
    var charSet = [
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'abcdefghijklmnopqrstuvwxyz',
        '0123456789',
        '!@#$%^&*()-_+='
    ];
    var password = '';
    for (var i = 0; i < length; i++) {
        var randomSet = charSet[Math.floor(Math.random() * charSet.length)];
        password += randomSet.charAt(Math.floor(Math.random() * randomSet.length));
    }
    return password;
}

// var passwordLength = prompt("Enter the password length:");
// console.log(randomPassword(passwordLength));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// another way to generate random password


function generatePassword() {
    var passwordLength = 12;
    var password = "";
    var charSet = [
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'abcdefghijklmnopqrstuvwxyz',
        '0123456789',
        '!@#$%^&*()-_+='
    ];
    for (var i = 0; i < passwordLength; i++) {
        var randomSet = charSet[Math.floor(Math.random() * charSet.length)];
        password += randomSet.charAt(Math.floor(Math.random() * randomSet.length));
    }
    return password;
}

document.write("the random password is <br> " + generatePassword());