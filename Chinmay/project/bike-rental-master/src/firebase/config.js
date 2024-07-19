import firebase from 'firebase'
// import 'firebase/functions' // <- needed if using httpsCallable
 
const firebaseConfig = {
  apiKey: "AIzaSyD-tvEErI_Gm3-6noIOtZ-dNwjjS7hNuhE",
  authDomain: "bike-rental-1ea5b.firebaseapp.com",
  databaseURL: "https://bike-rental-1ea5b.firebaseio.com",
};
 
// Initialize firebase instance
firebase.initializeApp(firebaseConfig)
 
// Initialize other services on firebase instance
// firebase.functions() // <- needed if using httpsCallable
