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

  var user_name = localStorage.getItem("user_name");
  var room_name = localStorage.getItem("roomname");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").innerHTML="";
  }

  
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
        firebase_message_id=childKey;
        message_data=childData;
      //start code
        console.log(message_data);
        name=message_data["name"];
        message=message_data["message"];
        like=message_data["like"];
        var name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
        var message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
        var button_with_tag="<button class='btn btn-warning glyphicon glyphicon-thumbs-up' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>Like: "+like+"</button>";
        var row=name_with_tag+message_with_tag+button_with_tag;
        document.getElementById("output").innerHTML+=row;
      //end code
    } });  }); }
      getData();

      function update_like(message_id){
        console.log(message_id);
        button_id=message_id;
        likes=document.getElementById(button_id).value;
        updatedlikes=Number(likes)+1;
        console.log(updatedlikes);
        firebase.database().ref(room_name).child(message_id).update({
          like:updatedlikes
        });
      }
      
      function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
      }

  