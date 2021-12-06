//YOUR FIREBASE LINKS
var firebaseConfig={
  apiKey: "AIzaSyDR8svh6Jzfcadj03RVliAxvKsrNSoY-yM",
  authDomain: "kwitterapp-450ca.firebaseapp.com",
  databaseURL: "https://kwitterapp-450ca-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-450ca",
  storageBucket: "kwitterapp-450ca.appspot.com",
  messagingSenderId: "787277834611",
  appId: "1:787277834611:web:c58a904f3d7662f4fa7d06",
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

