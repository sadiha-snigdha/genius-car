// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTkr0FwjcHUux8qStpQ9gFbOt-0YXkyRo",
  authDomain: "genius-car-services-76ced.firebaseapp.com",
  projectId: "genius-car-services-76ced",
  storageBucket: "genius-car-services-76ced.appspot.com",
  messagingSenderId: "56208286872",
  appId: "1:56208286872:web:fe90544c7df968154f1ced",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
