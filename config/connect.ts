// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0szQrXX5YQeZDfWrEj-awKPTiEd_pn2Q",
  authDomain: "case-85e82.firebaseapp.com",
  databaseURL: "https://case-85e82-default-rtdb.firebaseio.com",
  projectId: "case-85e82",
  storageBucket: "case-85e82.appspot.com",
  messagingSenderId: "735025003182",
  appId: "1:735025003182:web:9700cd24358c55761ccb3f",
  measurementId: "G-97773M5PBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const database = getDatabase(app);