const userName = document.getElementById("user");
const logOut = document.getElementById("logOut");
let name
if(JSON.parse(localStorage.getItem("sessionUserName")) == null){
    name = "Hacker "
}else{
    name = JSON.parse(localStorage.getItem("sessionUserName"))
}
userName.innerHTML = name;


////////////////////////// Events ///////////////////////////////////

logOut.addEventListener("click" , function(){
    localStorage.removeItem("sessionUserName")
    window.location = "../index.html"
})
