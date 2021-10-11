import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAnk5eel_IYKJB4-sxFFoDF1bm4MpuaNss",
	authDomain: "imessage-nik.firebaseapp.com",
	databaseURL: "https://imessage-nik.firebaseio.com",
	projectId: "imessage-nik",
	storageBucket: "imessage-nik.appspot.com",
	messagingSenderId: "401582476069",
	appId: "1:401582476069:web:840bfab82d722d3bd668cc",
	measurementId: "G-1PEWWLL56V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
