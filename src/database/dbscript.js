import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {};

const config = {
    apiKey: "AIzaSyDOZ_HpYKqBKC9CkKu7TadXQE-QqZV1sXw",
    authDomain: "maksss2018.firebaseapp.com",
    databaseURL: "https://maksss2018.firebaseio.com",
    projectId: "maksss2018",
    storageBucket: "maksss2018.appspot.com",
    messagingSenderId: "189345106301"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;