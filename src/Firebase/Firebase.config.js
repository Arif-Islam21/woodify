// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzSFLOMNOZAbaEY-L5GeX3_v7w66VWlNA",
  authDomain: "woodify-b7999.firebaseapp.com",
  projectId: "woodify-b7999",
  storageBucket: "woodify-b7999.appspot.com",
  messagingSenderId: "113608693027",
  appId: "1:113608693027:web:a02ff6c766ecf9f1dc6896",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
