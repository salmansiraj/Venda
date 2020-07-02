import * as firebase from "firebase/app";
import "firebase/database";

const db = firebase.database();

// Use the userID from auth DB 
// child by autoid

export default db;
