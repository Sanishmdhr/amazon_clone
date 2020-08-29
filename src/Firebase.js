import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDM9WRZlkO2uKUZRufVN-3V1yq01iYetPc",
  authDomain: "clone-1a807.firebaseapp.com",
  databaseURL: "https://clone-1a807.firebaseio.com",
  projectId: "clone-1a807",
  storageBucket: "clone-1a807.appspot.com",
  messagingSenderId: "549379774797",
  appId: "1:549379774797:web:e400e8d23da348fd253f04"
})

const auth = Firebase.auth();

export {auth};