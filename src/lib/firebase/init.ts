// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByM9tHLD476tCwiAKhWxRJVKlfPYGbPxc",
  authDomain: "my-first-next-app-50cb6.firebaseapp.com",
  projectId: "my-first-next-app-50cb6",
  storageBucket: "my-first-next-app-50cb6.appspot.com",
  messagingSenderId: "537039993059",
  appId: "1:537039993059:web:5e3fd11f6d15a747aeadd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app