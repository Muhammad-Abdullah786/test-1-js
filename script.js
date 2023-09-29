console.log("connected");

function randomPassword(length) {
  var charSet = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "!@#$%^&*()-_+=",
  ];
  var password = "";
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
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "!@#$%^&*()-_+=",
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
  var charSet =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_+="; // make sure it is string because array won;t work properly on substring
  var password = "";
  for (var i = 0; i < len; i++) {
    const ranIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(ranIndex, ranIndex + 1);
  }
  return password;
}

// console.log(generatePassword(12));

/// code done by teacher

// var bucket = "ASDFGHJKLasdfghjkl12345677890!@#$%^&*()_~";
// var userLength = 5;
// var password = "";

// function generatePassword() {
//   var random;
//   console.log("password generated", userLength);
//   for (let i = 0; i < userLength; i++) {
//     random = Math.floor(Math.random() * bucket.length);
//     // console.log("Password", bucket[random]);
//     password+=bucket.substring
//   }
// }
// generatePassword();

///  function to check whether the password has 2 specila characters 1 uppercase and 2 lowercase

function checkPassword(password) {
  let password = "B!@79ka";
  let specialCharacters = "$%^$&&^*()*!";
  let uppercase = "QWERTYUIOPALKDAGHZMVE";
  let lowercase = "qwkjsafjabgskyhsa";

  let specialCount = 0;
  let numCount = 0;
  let lowerCount = 0;
  let upperCount = 0;

  for (let i = 0; i < password.length; i++) {
    let passChar = password[i];

    for (let j = 0; j < allCharacters.length; j++) {
      if (allCharacters[j].includes(passChar)) {
        console.log("found it!");
      }
    }
  }
}
console.log(checkPassword(password));

function checkPassword(password) {
  const specialCharacters = "~!@#$%^&*()+,-./";
  const uppercaseLetters = "QWERTYUIOPLKJHGFDSA";
  const lowercaseLetters = "mnbvcxzasdfghjklpoiurqw";

  let specialCount = 0;
  let uppercaseCount = 0;
  let lowercaseCount = 0;

  for (let i = 0; i < password.length; i++) {
    const passChar = password[i];

    if (specialCharacters.includes(passChar)) {
      specialCount++;
    } else if (uppercaseLetters.includes(passChar)) {
      uppercaseCount++;
    } else if (lowercaseLetters.includes(passChar)) {
      lowercaseCount++;
    }
  }

  if (specialCount >= 2 && uppercaseCount >= 1 && lowercaseCount >= 2) {
    console.log("Password is strong.");
    return true;
  } else {
    console.log("Weak Password.");
    return false;
  }
}

const password = "B!@79ka";
checkPassword(password);
