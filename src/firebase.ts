import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhPGRRxUqw66K8nzrvTT-az8BgLURhN8g",
  authDomain: "blockchain-review-app.firebaseapp.com",
  projectId: "blockchain-review-app",
  storageBucket: "blockchain-review-app.appspot.com",
  messagingSenderId: "21764274709",
  appId: "1:21764274709:web:896ca207183542389fec1c",
};

export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
