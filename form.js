
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAia8USub7VEXq1kPlQqPAR0pkscTreOxo",
    authDomain: "login-34dd0.firebaseapp.com",
    projectId: "login-34dd0",
    storageBucket: "login-34dd0.appspot.com",
    messagingSenderId: "948630480762",
    appId: "1:948630480762:web:32a99224af79555c9ed8c3",
    measurementId: "G-BFE0M55WQS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function signup(){
    var email = document.getElementById("Email");
    var password = document.getElementById("password");
    const promise = auth.createUserwithEmailAndPassword(email.value, password.value);
    alert("Signed up with" + email.value);
  }
 
 
