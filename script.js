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

var passwordLength = prompt("Enter the password length:");
console.log(randomPassword(passwordLength));