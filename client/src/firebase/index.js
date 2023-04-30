// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU9y9hNd7rcWYQtFhyKddollSIAQBiIJk",
  authDomain: "webagenda-8f669.firebaseapp.com",
  projectId: "webagenda-8f669",
  storageBucket: "webagenda-8f669.appspot.com",
  messagingSenderId: "418731511083",
  appId: "1:418731511083:web:db1015136a0032a231096e",
  measurementId: "G-VRCHQ5XJPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{
    db
}