// Constructor function to create user objects
var userAccount = function(username, password, confirmPassword, email, favoriteRodent) {
  this.username = username;
  this.password = password;
  this.confirmPassword = confirmPassword;
  this.email = email;
  this.favoriteRodent = favoriteRodent;
};

var userList = [];

// Function called on click of submit input button in user sign-up form. This will need to be changed at some point, as this is using an HTML event handler, which isn't considered good practice. Best practice would be to add an event listener.
function newUserAccount(formData) {
  if (localStorage.getItem("users") == null) {
    // If localStorage is empty, create new user account from user data entered into sign-up form
    var userAdd = new userAccount(formData.username.value, formData.password.value, formData.confirmPassword.value, formData.email.value, formData.favoriteRodent.value);
    console.log(userAdd);
    userList = [];
    // Push new user data into userList array
    userList.push(userAdd);
    // Set localStorage item ("users") using JSON.stringify method on userList array
    localStorage.setItem("users", JSON.stringify(userList));
  } else {
    // If localStorage is not empty, use JSON.parse method on localStorage item ("users")
    var userList = JSON.parse(localStorage.getItem("users"));
    var userAdd = new userAccount(formData.username.value, formData.password.value, formData.confirmPassword.value, formData.email.value, formData.favoriteRodent.value);
    console.log(userAdd);
    // Push new user data into userList array, added on to existing user objects
    userList.push(userAdd);
    localStorage.setItem("users", JSON.stringify(userList));
  }
};
