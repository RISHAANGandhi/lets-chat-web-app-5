var firebaseConfig = {
    apiKey: "AIzaSyDj3BtXQcFKQAVdRr5FuffZqHVD0r857EM",
    authDomain: "kwitter-31f6e.firebaseapp.com",
    databaseURL: "https://kwitter-31f6e-default-rtdb.firebaseio.com",
    projectId: "kwitter-31f6e",
    storageBucket: "kwitter-31f6e.appspot.com",
    messagingSenderId: "723646979391",
    appId: "1:723646979391:web:a7e78813b85ac034d4078a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
  function addroom(){
    var room_name=document.getElementById("room_name").value;
    localStorage.setItem("roomname",room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    window.location="kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log(Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML+=row;
   //End code
});});}
getData();

function redirecttoroomname(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name",user_name);
localStorage.removeItem("roomname",room_name);
window.location="index.html";
}