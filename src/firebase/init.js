import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBp5rv88OcOWw7NJrGtAQiB23UJEV9RI-g',
  authDomain: 'live-chat-3903c.firebaseapp.com',
  databaseURL: 'https://live-chat-3903c-default-rtdb.firebaseio.com',
  projectId: 'live-chat-3903c',
  storageBucket: 'live-chat-3903c.appspot.com',
  messagingSenderId: '1009941480432',
  appId: '1:1009941480432:web:bd9034870e751f84f15335',
  measurementId: 'G-J88SH3JKMC',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

export default db;
