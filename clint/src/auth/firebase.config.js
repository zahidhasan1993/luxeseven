// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyA7CFuLRfQWHL24iAsn4xA3OKC08MNr2JU",
  //   authDomain: "luxeseven-f5a34.firebaseapp.com",
  //   projectId: "luxeseven-f5a34",
  //   storageBucket: "luxeseven-f5a34.appspot.com",
  //   messagingSenderId: "204330706069",
  //   appId: "1:204330706069:web:d5deddeed44ebdffa5679c"
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
