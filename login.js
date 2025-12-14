var email = document.getElementById("email")
var password = document.getElementById("password")



// array of objects
var userObject = [
  
]

function reDirect(){
  var staus = localStorage.getItem("login")
  if(staus ==true){
    window.location.href="./dashboard.html"

  }
}
reDirect()

function loginUser(){
    if(email.value==""){
        Toastify({
  text: "enter email",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();
    }
    else if(password.value==""){
          Toastify({
  text: "please enter password",
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
  if(userExist==true){
    console.log(userObject[selectIndex])
    if(userObject[selectIndex].password == password.value){
      localStorage.setItem("login",true)
      localStorage.setItem("email",email.value)
      localStorage.setItem("name",userObject[selectIndex].name)
          Toastify({
  text: "login success",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();
setTimeout(()=>{
window.location.href="./dashboard.html"
},1000)

    }

    else{
       Toastify({
  text: "invalid password",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();


    }


    
  }
  else{
      Toastify({
  text: "user not registor",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();

  }


}

    
    }

    function setData(){
  var userData = localStorage.getItem("users")
  userObject = JSON.parse(userData) || []
  console.log(userData)
  console.log(userObject)
}
setData()



//sir code 



// var email = document.getElementById("email");
// var password = document.getElementById("password");

// var useremail = "new@yopmail.com";
// var userpassword = "Abc123@!";

// array of objects

// var userObj = [];

// function reDirect() {
//   var status = localStorage.getItem("login");
//   console.log(status)
//   if (status==true) {
//     window.location.href = "./dashboard.html";
//   }
// }

// reDirect();

// function loginUser() {
//   if (email.value == "") {
//     Toastify({
//       text: "please enter your email",
//       className: "error",
//       position: "center",
//       gravity: "bottom",
//       style: {
//         background: "linear-gradient(to right, red,red)",
//       },
//     }).showToast();
//   } else if (password.value == "") {
//     Toastify({
//       text: "please enter password",
//       className: "error",
//       position: "center",
//       gravity: "bottom",
//       style: {
//         background: "linear-gradient(to right, red,red)",
//       },
//     }).showToast();
//   } else {
//     var exitUser = false;
//     var selectedIndex = "";
//     for (var i = 0; i < userObj.length; i++) {
//       if (userObj[i].email == email.value) {
//         exitUser = true;
//         selectedIndex = i;
//         break;
//       }
//     }

//     if (exitUser == true) {
//       console.log(userObj[selectedIndex]);
//       if (userObj[selectedIndex].password == password.value) {
//         localStorage.setItem("login", true);
//         localStorage.setItem("email", email.value);
//         localStorage.setItem("name", userObj[selectedIndex].name);

//         Toastify({
//           text: "login success",
//           className: "error",
//           position: "center",
//           gravity: "bottom",
//           style: {
//             background: "linear-gradient(to right, green,blue)",
//           },
//         }).showToast();
//         setTimeout(() => {
//           window.location.href = "./dashboard.html";
//         }, 1000);
//       } else {
//         Toastify({
//           text: "invalid password",
//           className: "error",
//           position: "center",
//           gravity: "bottom",
//           style: {
//             background: "linear-gradient(to right, red,red)",
//           },
//         }).showToast();
//       }
//     } else {
//       Toastify({
//         text: "user not regsister please signup",
//         className: "error",
//         position: "center",
//         gravity: "bottom",
//         style: {
//           background: "linear-gradient(to right, red,red)",
//         },
//       }).showToast();
//     }
//   }

  //   else if (email.value != useremail) {
  //     Toastify({
  //       text: "user not regsister",
  //       className: "error",
  //       position: "center",
  //       gravity: "bottom",
  //       style: {
  //         background: "linear-gradient(to right, red,red)",
  //       },
  //     }).showToast();
  //   } else if (password.value != userpassword) {
  //     Toastify({
  //       text: "invalid password",
  //       className: "error",
  //       position: "center",
  //       gravity: "bottom",
  //       style: {
  //         background: "linear-gradient(to right, red,red)",
  //       },
  //     }).showToast();
  //   } else {
  //     console.log(email.value, password.value);
  //     // localStorage.setItem(Key,value)
  //     localStorage.setItem("login", true);
  //     localStorage.setItem("email", email.value);
  //     Toastify({
  //       text: "login success",
  //       className: "error",
  //       position: "center",
  //       gravity: "bottom",
  //       style: {
  //         background: "linear-gradient(to right, green,blue)",
  //       },
  //     }).showToast();
  //     setTimeout(() => {
  //       window.location.href = "./dashboard.html";
  //     }, 1000);

  //     // localStorage.setItem("password",email.value)
  //   }
// }

// flag=>boolean

// function setData() {
//   var userData = localStorage.getItem("users");
//   userObj = JSON.parse(userData);
//   console.log(userData);
//   console.log(userObj);
// }
// setData();