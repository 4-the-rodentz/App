var getUserInfo = JSON.parse(localStorage.getItem("userData"));

console.log("Rodent submission log - userName: " + getUserInfo.userName + " has submitted a sighting of a: " + getUserInfo.rodentType);

function userOutput() {
  var userOutputMessage = document.getElementById("userOutputMessage");
  userOutputMessage.setAttribute("class", "userOutputMessage-transition");
  userOutputMessage.innerHTML = "Good job " + getUserInfo.userName + "! Your sighting of a " + getUserInfo.rodentType + " has been logged.";
};

window.addEventListener("load", userOutput);
