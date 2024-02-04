////////////////////////// Variables ///////////////////////////////////

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPass = document.getElementById("userPass");
const alertF = document.getElementById("alertF");
const alertT = document.getElementById("alertT");
const alertR = document.getElementById("alertR");
const login = document.getElementById("signupBtn");
const link = document.getElementById("link");

let users = [];
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}


///////////////////////////// Events /////////////////////////////////////

login.addEventListener("clock" , function(e){
    addUser()
})

document.addEventListener("keydown" , function(e){
  if(e.key == "Enter"){
    addUser()
  }
})


link.addEventListener('click' , function(){
  window.location = "../index.html"
})


///////////////////////////// Functions  ////////////////////////////

function addUser() {
  if (repeatedEmail()) {
    if (
      emailValidation() &&
      passValidation() &&
      nameValidation() &&
      repeatedEmail()
    ) {
      let user = {
        name: userName.value,
        email: userEmail.value,
        password: userPass.value,
      };

      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      alertT.classList.remove("d-none");
      alertF.classList.add("d-none");
      alertR.classList.add("d-none");
      clearForm();
    } else {
      alertF.classList.remove("d-none");
      alertT.classList.add("d-none");
      alertR.classList.add("d-none");
    }
  } else {
    alertR.classList.remove("d-none");
    alertF.classList.add("d-none");
    alertT.classList.add("d-none");
  }
}


function repeatedEmail() {
  if (localStorage.getItem("users") == null) {
    return true;
  } else {
    for (let i = 0; i < users.length; i++) {
      if (userEmail.value == users[i].email) {
        return false;
      }
    }
    return true;
  }
}

function clearForm() {
  userName.value = "";
  userPass.value = "";
  userEmail.value = "";
  userEmail.classList.remove("is-invalid");
  userPass.classList.remove("is-invalid");
  userName.classList.remove("is-invalid");
  userEmail.classList.remove("is-valid");
  userPass.classList.remove("is-valid");
  userName.classList.remove("is-valid");
}



//////////////////////////////////////////// Validation ////////////////////////////////

function emailValidation() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailRegex.test(userEmail.value)) {
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    return true;
  } else {
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    return false;
  }
}

function passValidation() {
  var passRegex = /^[0-9]\w{7,14}$/;
  if (passRegex.test(userPass.value)) {
    userPass.classList.remove("is-invalid");
    userPass.classList.add("is-valid");
    return true;
  } else {
    userPass.classList.add("is-invalid");
    userPass.classList.remove("is-valid");
    return false;
  }
}

function nameValidation() {
  if (userName.value.length > 3) {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    return false;
  }
}
