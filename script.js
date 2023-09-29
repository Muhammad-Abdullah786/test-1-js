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

// document.write("the random password is <br> " + generatePassword());

// easiest way to generate a random password
//////////////////////////////////////////////////////

function generatePassword(len) {
    // var passwordLength = 12;
    var charSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_+=';// make sure it is string because array won;t work properly on substring
    var password = "";
    for (var i = 0; i < len; i++) {
        const ranIndex = Math.floor(Math.random() * charSet.length);
        password += charSet.substring(ranIndex , ranIndex + 1);
    }
    return password;
}

console.log(generatePassword(12));