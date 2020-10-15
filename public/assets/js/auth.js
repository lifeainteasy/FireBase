var firebaseConfig = {
    apiKey: "AIzaSyBU7pv0jNm4bhSTykC33-HgD-e3NNkzkh8",
    authDomain: "fir-test-4628d.firebaseapp.com",
    databaseURL: "https://fir-test-4628d.firebaseio.com",
    projectId: "fir-test-4628d",
    storageBucket: "fir-test-4628d.appspot.com",
    messagingSenderId: "865926816012",
    appId: "1:865926816012:web:e892046afdfc52b2092929",
    measurementId: "G-B7KWV6G4YY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  $(document).ready(function (user){
      firebase.auth().onAuthStateChanged(function (user){
          if (user) {console.log('log',user);}
          else {console.log('err','not yet')}
      });
  });

  function login(){
    firebase.auth().createUserWithEmailAndPassword($("txtemail").val(), $("txtpasswd")).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      
  }
