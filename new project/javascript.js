import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCi3M6fwZ2Les7v_kj_rIrZOf7wNMas11Y",
    authDomain: "share-govt-document.firebaseapp.com",
    projectId: "share-govt-document",
    storageBucket: "share-govt-document.appspot.com",
    messagingSenderId: "789065061153",
    appId: "1:789065061153:web:8b147487e53dd4cbada460"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// var sportsbuddyBD=firebase.database().ref("sports buddy");
// document.getElementById("registerForm").addEventListener("submit", submitForm);

// function submitForm(e){
//   e.preventDefault();
//   var email=getElementVal('email');
//   var password=getElementVal('password');
//   // console.log(email,password)
//   saveinfo(email,password);
// }

// const saveinfo = (email, password)=>{
//   var new1=sportsbuddyBD.push();
//   new1.set({
//       email : email,
//       password : password,
//   })

// };

// const getElementVal= (id) =>{
//   return document.getElementById(id).value;
// }


//inputs
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
//submit Button

const submit = document.getElementById('submit');
console.log(submit)
submit.addEventListener("click", function (event) {
  event.preventDefault()

  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating Your Account");
      window.location.href = "login.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
})