import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBqHY6r_q96RZqeDooSFzthmxxWQrcUgqs",
  authDomain: "sports-buddy-eab63.firebaseapp.com",
  databaseURL: "https://sports-buddy-eab63-default-rtdb.firebaseio.com",
  projectId: "sports-buddy-eab63",
  storageBucket: "sports-buddy-eab63.appspot.com",
  messagingSenderId: "49982895548",
  appId: "1:49982895548:web:b7ad502f9177abc6bf67b9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
firebase.initializeApp(firebaseConfig);
var sportsbuddyBD=firebase.database().ref("sports buddy");
document.getElementById("registerForm").addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();
  var email=getElementVal('email');
  var password=getElementVal('password');
  // console.log(email,password)
  saveinfo(email,password);
}

const saveinfo = (email, password)=>{
  var new1=sportsbuddyBD.push();
  new1.set({
      email : email,
      password : password,
  })

};

const getElementVal= (id) =>{
  return document.getElementById(id).value;
}


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

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Loging To Your Account");
      
      window.location.href = "HOMEPAGE2.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
})