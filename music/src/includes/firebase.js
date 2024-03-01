import firebase from "firebase/app";
import "firebase/auth"
import 'firebase/firestore'
import 'firebase/storage'
 

const firebaseConfig = {
    apiKey: "AIzaSyDM459BXhYTuEk93cl4MTZQzPXhrlYs1kU",
    authDomain: "music-56391.firebaseapp.com",
    projectId: "music-56391",
    storageBucket: "music-56391.appspot.com",
    messagingSenderId: "801552428762",
    appId: "1:801552428762:web:4572fd218570d2dcfc3fe3"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

<<<<<<< HEAD
db.enablePersistence().catch((error) => {
  console.log(`firebase persistence error ${error.code}`);
})

=======
>>>>>>> 92e997fb40dae32ff317c1a3602b72a16df9dd44

const songsCollection = db.collection('songs');
const userCollection = db.collection("users")
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  userCollection,
  storage,
  songsCollection,
  commentsCollection
  
}


