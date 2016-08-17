// Constructor function to create user objects
var userAccount = function(userName, password, email, favoriteRodent) {
  this.userName = userName;
  this.password = password;
  this.email = email;
  this.favoriteRodent = favoriteRodent;
};

var userList = [];

// DOM queries for form elements warning messages (form validation)
var userNameWarning = document.getElementById("userName-warning");
var passwordWarning = document.getElementById("password-warning");
var emailWarning = document.getElementById("email-warning");

// DOM queries for changing display values and adding user message
var signupDisplay = document.getElementById("newUserModal");
var userGreeting = document.getElementById("user-greeting");

// DOM queries for form validation
var formData = document.getElementById("user-form");
var userNameInput = document.getElementById("userName");
var passwordInput = document.getElementById("password");
var emailInput = document.getElementById("email");
var favoriteRodentInput = document.getElementById("favoriteRodent");

// Email pattern validation
var emailReg = /\S+@\S+\.\S+/;

// JSON method to parse localStorage item
var getUserInfo = JSON.parse(localStorage.getItem("users"));

// Function to change display values of sign-up form and user greeting
function checkLocalStorage() {
  if (localStorage.getItem("users") == null) {
    signupDisplay.style.display = "block";
    userGreeting.style.display = "none";
  } else {
      signupDisplay.style.display = "none";
      userGreeting.style.display = "block";
      userGreeting.innerHTML = "Hello " + getUserInfo["0"].userName + "! Have you seen a " + getUserInfo["0"].favoriteRodent + " recently?";
  }
};

// Event listeners
window.addEventListener("load", checkLocalStorage);
document.getElementById("sign-up-submit").addEventListener("click", newUserAccount);

// Function called on click of submit input button in user sign-up form. This will need to be changed at some point, as this is using an HTML event handler, which isn't considered good practice. Best practice would be to add an event listener.
function newUserAccount(formData) {
  if (localStorage.getItem("users") == null) {
    if (userNameInput.value == "" && passwordInput.value == "" && emailInput.value == "") {
      userNameWarning.innerHTML = "Please create a username.";
      passwordWarning.innerHTML = "Please create a password.";
      emailWarning.innerHTML = "Please enter an email address."
    } else if (userNameInput.value == "") {
        userNameWarning.innerHTML = "Please create a username.";
    } else if (userNameInput.value != "" && passwordInput.value == "") {
        userNameWarning.innerHTML = "";
        passwordWarning.innerHTML = "Please create a password.";
    } else if (passwordInput.value == "") {
        passwordWarning.innerHTML = "Please create a password.";
    } else if (passwordInput.value != "" && userNameInput.value == "") {
        userNameWarning.innerHTML = "Please create a username.";
        passwordWarning.innerHTML = "";
    } else if (passwordInput.value != "" && userNameInput.value != "" && emailInput.value == "") {
        userNameWarning.innerHTML = "";
        passwordWarning.innerHTML = "";
        emailWarning.innerHTML = "Please enter an email address."
    } else if (userNameInput.value != "" && passwordInput.value != "" && emailInput.value != "" && (emailInput.value).match(emailReg)) {
        var userAdd = new userAccount(userNameInput.value, passwordInput.value, emailInput.value, favoriteRodentInput.value);
        console.log(userAdd);
        userList = [];
        // Push new user data into userList array
        userList.push(userAdd);
        // Set localStorage item ("users") using JSON.stringify method on userList array
        localStorage.setItem("users", JSON.stringify(userList));
    }
  } else {
      document.getElementById("user-form").style.display = "none";
  }
}

// animations for modal


function showBlock(event) {
    setTimeout(function(){
        document.getElementById('newUserModal').className += "show";
    }, 10);

}


window.addEventListener("load", showBlock);