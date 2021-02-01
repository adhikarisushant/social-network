  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuUXvGp7NnPgR8BhwLDNk9oC0rHqiqFTU",
    authDomain: "social-network-dda94.firebaseapp.com",
    databaseURL: "social-network-dda94.firebaseio.com",
    projectId: "social-network-dda94",
    storageBucket: "social-network-dda94.appspot.com",
    messagingSenderId: "899818114818",
    appId: "1:899818114818:web:ca29c3b4a2365c328d7c1b"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};

//   export default db