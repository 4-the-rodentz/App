var getUserInfo = JSON.parse(localStorage.getItem("userData"));

// Function to output message to user after submitting rodent submission form
function userOutput() {
  if (getUserInfo = null) {
    var userOutputMessage = document.getElementById("userOutputMessage");
    userOutputMessage.setAttribute("class", "userOutputMessage-transition");
    userOutputMessage.innerHTML = "Rodent sightings in PDX";
  } else {
  var userOutputMessage = document.getElementById("userOutputMessage");
  userOutputMessage.setAttribute("class", "userOutputMessage-transition");
  userOutputMessage.innerHTML = "Good job " + getUserInfo.userName + "! Your sighting of a " + getUserInfo.rodentType + " has been logged.";
  console.log("Rodent submission log - userName: " + getUserInfo.userName + " has submitted a sighting of a: " + getUserInfo.rodentType);
  }
};

window.addEventListener("load", userOutput);
