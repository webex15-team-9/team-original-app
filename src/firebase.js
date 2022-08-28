import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAh4p6_lpCVwIyZvrZWkKv7d_P2AE0UZM",
  authDomain: "team-original-app-447ab.firebaseapp.com",
  projectId: "team-original-app-447ab",
  storageBucket: "team-original-app-447ab.appspot.com",
  messagingSenderId: "706868844760",
  appId: "1:706868844760:web:2e815f87fb9af192765fad",
  measurementId: "G-XT33NCW4G4",
};

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig);
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app);
