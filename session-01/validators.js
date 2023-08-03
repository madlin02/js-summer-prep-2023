/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
const allLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const specialCharacters= "(){}[]|`¬¦! £$%^&*<>:;#~_-+=,@"
const containsSpecialCharacters = new RegExp(`[${specialCharacters}]`).test(username);
const containsNumbers= /^\d+$/.test(username)

  if (
    username.length >= 3 && 
    username.length <= 10 && 
    allLetters.includes(username[0]) && 
    !containsSpecialCharacters || 
    containsNumbers== true
  ) {
    return true;
  } else {
    return false;
  }
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
const allLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const containsNumbers= /^\d+$/.test(password)
const specialCharacters= "(){}[]|`¬¦! £$%^&*<>:;#~_-+=,@"
const containsSpecialCharacters = new RegExp(`[${specialCharacters}]`).test(password);


  if (
    password.length >= 10 && 
    password.length <= 64 && 
    allLetters.includes(password) &&
    containsNumbers== true &&
    containsSpecialCharacters== true
 ) {
    return true;
  } else {
    return false;
  }
}
module.exports = { validUsername, validPassword };
