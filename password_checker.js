// var userId = "Joe";
// var password = "p@ss";
//
// userId !== password
//
// userId.length > 6;
// password.length > 6;
//
// !userId.includes("!");
// !userId.includes("#");
// !userId.includes("$");
//
// password.includes("!");
// password.includes("#");
// password.includes("$");
//
// password !== "password";

// password must be greater than six digits
function userCheckId(str, password) {
  return str !== password && str.length > 6 && !str.includes("!") && !str.includes("#") && !str.includes("$");
}

function userPassValid(str) {
  return str !== "password" && str.length > 6 && (str.includes("!") || str.includes("#") || str.includes("$"));
}

function areCredsValid(id, pass) {
  var id = prompt("Enter username");
  var pass = prompt("Enter password");
  return userCheckId(id, pass) && userPassValid(pass);
}



//
// password must contain at least one digit.



function userCheckId(str, password) {
  return str !== password && str.length > 6 && !str.includes("!") && !str.includes("#") && !str.includes("$");
}

function userPassValid(str) {
  return str !== "password" && str.length > 6 && ((str.includes("!") || str.includes("#") || str.includes("$")) && ((str.includes("1") || str.includes("2") || str.includes("3"))
}

function areCredsValid(id, pass) {
  var id = prompt("Enter username");
  var pass = prompt("Enter password");
  return userCheckId(id, pass) && userPassValid(pass);
}
