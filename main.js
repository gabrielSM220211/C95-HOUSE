// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkzWK_RzWQvPvPVQGtSCh7-QhU62Wn_qI",
  authDomain: "c94-casa.firebaseapp.com",
  databaseURL: "https://c94-casa-default-rtdb.firebaseio.com",
  projectId: "c94-casa",
  storageBucket: "c94-casa.appspot.com",
  messagingSenderId: "138840191603",
  appId: "1:138840191603:web:b75c72cc9668ff8e6cb006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código
row = "<div class='roomName' id="+room_names+" onclick='redirectToRoomName(this.id)' >#"+ room_names +"</div><hr>";
//Fim do código
});});}
getData();