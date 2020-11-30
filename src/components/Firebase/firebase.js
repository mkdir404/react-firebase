import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
      apiKey: "AIzaSyBlRs5gRkywcVWeQyZRpQYDEzEPiBZ76_Q",
      authDomain: "my-firebase-project-aa513.firebaseapp.com",
      databaseURL: "https://my-firebase-project-aa513.firebaseio.com",
      projectId: "my-firebase-project-aa513",
      storageBucket: "my-firebase-project-aa513.appspot.com",
      messagingSenderId: "660318415515",
      appId: "1:660318415515:web:b6f4fd4b1988595216b43e",
      measurementId: "G-ENFTH1G5SJ"
  };

  class Firebase {
      constructor(){
          app.initializeApp(config)          
          this.auth = app.auth();
          this.db = app.database();
      }
      // Auth API

      doCreateUserWithEmailAndPassword = (email,password) =>
        this.auth.createUserWithEmailAndPassword(email,password);
      
      doSignInWithEmailAndPassword = (email,password) =>
        this.auth.signInWithEmailAndPassword(email,password)
      
      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

      doPasswordUpdate = password => 
        this.auth.currentUser.updatePassword(password)

        //Users 
        
      user = uid => this.db.ref(`users/${uid}`); 
      users = () => this.db.ref('users');
  
      }

  export default Firebase;

/**

Prod Optons

import app from 'firebase/app';
 
const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
};
 
const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
};
 
const config =
  process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
 
class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
 
export default Firebase;


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.23.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBlRs5gRkywcVWeQyZRpQYDEzEPiBZ76_Q",
    authDomain: "my-firebase-project-aa513.firebaseapp.com",
    databaseURL: "https://my-firebase-project-aa513.firebaseio.com",
    projectId: "my-firebase-project-aa513",
    storageBucket: "my-firebase-project-aa513.appspot.com",
    messagingSenderId: "660318415515",
    appId: "1:660318415515:web:b6f4fd4b1988595216b43e",
    measurementId: "G-ENFTH1G5SJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

*/