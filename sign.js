var email = document.getElementById("email")
var password = document.getElementById("password")
var userName = document.getElementById("name")

var userObject = [
 
]

function signupUser(){
    if(userName.value==""){
         Toastify({
  text: "please user name",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();
    }
    else if(email.value==""){
         Toastify({
  text: "please enter your email ",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();
    }
    else if(password.value ==""){
         Toastify({
  text: "please enter your password",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();
    }
    

    
else{ 
   var userExist = false
   var selectIndex = ""

  for(var i=0;i<userObject.length;i++){
    if(userObject[i].email == email.value){
      userExist = true
      selectIndex = i;
      break;

    }

  }
}
    
if(userExist==true){
      Toastify({
  text: "email alerdy exist",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();
  
}
else{
  userObject.push({
    email:email.value,
    password:password.value,
    name:userName.value

  })

  Toastify({
  text: "singnp successfully",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();
setTimeout(()=>{
 localStorage.setItem("users",JSON.stringify(userObject))
   window.location.href="./login.html"
},1000)



 
}

}
function setData(){
  var userData = localStorage.getItem("users")
  userObject = JSON.parse(userData) || []
  console.log(userData)
  console.log(userObject)
}
setData()