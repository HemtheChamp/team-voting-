import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    const firebaseConfig = {
        apiKey: "AIzaSyASMR5XBWwNmmOxeCl4sjGkTqFyp1svNGM",
        authDomain: "team-voting-app-15994.firebaseapp.com",
        projectId: "team-voting-app-15994",
        storageBucket: "team-voting-app-15994.appspot.com",
        messagingSenderId: "639391347995",
        appId: "1:639391347995:web:c0b342d39c1fef35ba0fbe"
      };
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();