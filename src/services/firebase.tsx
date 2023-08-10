import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7FEJeZh2LO_vND6UYe11kRO2PHNvYZn8",
  authDomain: "composite-shard-372515.firebaseapp.com",
  projectId: "composite-shard-372515",
  storageBucket: "composite-shard-372515.appspot.com",
  messagingSenderId: "549283482423",
  appId: "1:549283482423:web:ceb9e3b8d75f922755a8b2",
  measurementId: "G-NP4EDCNS5Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export { signOut }; //exportar la función signOut