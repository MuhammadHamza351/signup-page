var userEmail = document.getElementById("userEmail")
var userName1 = document.getElementById("userName")

function setUserEmail(){
    var email = localStorage.getItem("email")
    var name = localStorage.getItem("name")
    console.log(email)
    userEmail.innerText = email
    userName1.innerText = name

    // if(email == null){
    //     window.location.href="./login.html"
    // }

}
function logout(){
    localStorage.removeItem("login")
    localStorage.removeItem("email")
    localStorage.removeItem("name")

    window.location.href="./login.html"
    
}
setUserEmail()



