import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuWAhrbFOKTXfhV7DaEF9AeEssqXB8cW4",
  authDomain: "chatapp-1e06e.firebaseapp.com",
  projectId: "chatapp-1e06e",
  storageBucket: "chatapp-1e06e.appspot.com",
  messagingSenderId: "705235885202",
  appId: "1:705235885202:web:1095e833c51cba3e461a4b"
};

export const app = initializeApp(firebaseConfig);