import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs3hoKMAeb8KALWfnzcRTiTex1RWy5N7s",
  authDomain: "chelnr-dev.firebaseapp.com",
  databaseURL: "https://chelnr-dev.firebaseio.com",
  projectId: "chelnr-dev",
  storageBucket: "chelnr-dev.appspot.com",
  messagingSenderId: "746441121721",
  appId: "1:746441121721:web:7715dfa60c5b9ed1fae068"
}

const app = firebase.initializeApp(firebaseConfig);

export default app;
