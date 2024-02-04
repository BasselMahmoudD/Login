/////////////////////////////////// Variables ///////////////////////////////////////////
const userEmail = document.getElementById("email");
const userPass = document.getElementById("pass");
const login = document.getElementById("logBtn");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");
const link = document.getElementById("link");
let userName;
let users = [];
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}
////////////////////////////////// Events  ///////////////////////////////////////////

login.addEventListener("click", function () {
  loginUser();
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    loginUser();
  }
});

link.addEventListener("click", function () {
  window.location = "./Pages/signUp.html"
});

////////////////////////////////// Functions /////////////////////////////////////

function loginUser() {
  let email = userEmail.value;
  let pass = userPass.value;

  for (let i = 0; i < users.length; i++) {
    if (email == users[i].email) {
      if (pass == users[i].password) {
        userName = users[i].name;
        localStorage.setItem("sessionUserName", JSON.stringify(userName));
        window.location = "./Pages/home.html";
        return 0;
      } else {
        passErr.classList.remove("d-none");
        emailErr.classList.add("d-none");
        return 0;
      }
    } else {
      emailErr.classList.remove("d-none");
      passErr.classList.add("d-none");
    }
  }
}
