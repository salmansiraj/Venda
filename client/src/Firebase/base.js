import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAs3hoKMAeb8KALWfnzcRTiTex1RWy5N7s",
  authDomain: "chelnr-dev.firebaseapp.com",
  databaseURL: "https://chelnr-dev.firebaseio.com",
  projectId: "chelnr-dev",
  storageBucket: "chelnr-dev.appspot.com",
  messagingSenderId: "746441121721"
}

const app = firebase.initializeApp(config);

export default app;