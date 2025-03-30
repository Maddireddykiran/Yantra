
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBtbGG7BdViFAOX4vHzbU3YvdrDFHM5Ro",
  authDomain: "yantra-a88ab.firebaseapp.com",
  projectId: "yantra-a88ab",
  storageBucket: "yantra-a88ab.firebasestorage.app",
  messagingSenderId: "561829165198",
  appId: "1:561829165198:web:deaa7a93d37a134f8371df",
  measurementId: "G-M63MBWSSM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);


export { db };

