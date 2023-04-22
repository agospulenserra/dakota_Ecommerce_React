import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuMHWVbedjijjcUDCN-lgDmykt7LYeh4k",
  authDomain: "ecommerce-efb80.firebaseapp.com",
  projectId: "ecommerce-efb80",
  storageBucket: "ecommerce-efb80.appspot.com",
  messagingSenderId: "166944862737",
  appId: "1:166944862737:web:0f00a85269b52f444477b0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;