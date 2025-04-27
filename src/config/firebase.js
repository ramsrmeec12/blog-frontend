// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxFx1DFluX518PWZDxQZ_i53gXsqz-ULk",
  authDomain: "blog-project-c2f8e.firebaseapp.com",
  projectId: "blog-project-c2f8e",
  storageBucket: "blog-project-c2f8e.firebasestorage.app",
  messagingSenderId: "142997885597",
  appId: "1:142997885597:web:f6c973fdaaee70a2d53a74",
  measurementId: "G-L0DL6FDK3P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
