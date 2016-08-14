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
  if (formData.username.value == "") {
    var usernameCheck = document.getElementById("username-label");
    var usernameWarningElement = document.createElement("p");
    usernameWarningElement.innerHTML = "Please create a username.";
    usernameCheck.insertBefore(usernameWarningElement, usernameCheck.firstChild);
  } else if (formData.password.value == "") {
      var passwordCheck = document.getElementById("password-label");
      var passwordWarningElement = document.createElement("p");
      passwordWarningElement.innerHTML = "Please create a password.";
      passwordCheck.insertBefore(passwordWarningElement, passwordCheck.firstChild);
  } else if (formData.email.value == "") {
      var emailCheck = document.getElementById("email-label");
      var emailWarningElement = document.createElement("p");
      emailWarningElement.innerHTML = "Please enter an email address.";
      emailCheck.insertBefore(emailWarningElement, emailCheck.firstChild);
  } else if (localStorage.getItem("users") == null) {
    // If localStorage is empty, create new user account from user data entered into sign-up form
    var userAdd = new userAccount(formData.username.value, formData.password.value, formData.email.value, formData.favoriteRodent.value);
    console.log(userAdd);
    userList = [];
    // Push new user data into userList array
    userList.push(userAdd);
    // Set localStorage item ("users") using JSON.stringify method on userList array
    localStorage.setItem("users", JSON.stringify(userList));
  } else if (localStorage.getItem("users") !== null) {
    // If localStorage is not empty, use JSON.parse method on localStorage item ("users")
    var userList = JSON.parse(localStorage.getItem("users"));
    var userAdd = new userAccount(formData.username.value, formData.password.value, formData.email.value, formData.favoriteRodent.value);
    console.log(userAdd);
    // Push new user data into userList array, added on to existing user objects
    userList.push(userAdd);
    localStorage.setItem("users", JSON.stringify(userList));
  }
};
