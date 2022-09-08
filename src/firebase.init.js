// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Ru89_jKSJVAQhF6xHHWgxPFR7GZRk-M",
  authDomain: "product-management-website.firebaseapp.com",
  projectId: "product-management-website",
  storageBucket: "product-management-website.appspot.com",
  messagingSenderId: "847285569497",
  appId: "1:847285569497:web:5c6b5159362a327b2ffbc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;