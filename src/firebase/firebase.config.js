// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwNXroOO-IAxobr_lg09njRrncVkTShho",
  authDomain: "brand-shop-e4eea.firebaseapp.com",
  projectId: "brand-shop-e4eea",
  storageBucket: "brand-shop-e4eea.appspot.com",
  messagingSenderId: "1094093328732",
  appId: "1:1094093328732:web:254302d918a449eaf7f199"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
