const firebaseConfig = {
    apiKey: "AIzaSyCi3M6fwZ2Les7v_kj_rIrZOf7wNMas11Y",
    authDomain: "share-govt-document.firebaseapp.com",
    projectId: "share-govt-document",
    storageBucket: "share-govt-document.appspot.com",
    messagingSenderId: "789065061153",
    appId: "1:789065061153:web:8b147487e53dd4cbada460"
};
     firebase.initializeApp(firebaseConfig);
// render recaptcha verifier
render();
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

// function for send OTP
function phoneAuth() {
    var number = document.getElementById('number').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        console.log('OTP Sent');
    }).catch(function (error) {
        // error in sending OTP
        alert(error.message);
    });
}
