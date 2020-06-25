import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCtP4DPLcHG0bOqcHO6OOaKhgfRmCfrrCs',
  authDomain: 'galang-dana-5de17.firebaseapp.com',
  databaseURL: 'https://galang-dana-5de17.firebaseio.com',
  projectId: 'galang-dana-5de17',
  storageBucket: 'galang-dana-5de17.appspot.com',
  messagingSenderId: '425964421729',
  appId: '1:425964421729:web:fdaf46e6bbf41c7b2aa020',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;
