import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCSo_oshePBQ1GypWMyzcIIgcJlEN8kLE",
  authDomain: "simple-crud-5fc69.firebaseapp.com",
  projectId: "simple-crud-5fc69",
  storageBucket: "simple-crud-5fc69.appspot.com",
  messagingSenderId: "815550689892",
  appId: "1:815550689892:web:5a6562a304f4b627a52571",
  measurementId: "G-WS5MQXFZ7Q",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
