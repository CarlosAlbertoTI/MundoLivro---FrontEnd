import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
const firebaseConfig = {
    apiKey: "AIzaSyBiGLVnpb706g5RLszf4Nsb08D_peqPnkI",
    authDomain: "mundolivro-15bcd.firebaseapp.com",    
    databaseURL: "https://mundolivro-15bcd-default-rtdb.firebaseio.com",    
    projectId: "mundolivro-15bcd",    
    storageBucket: "mundolivro-15bcd.appspot.com",    
    messagingSenderId: "88789839971",    
    appId: "1:88789839971:web:b6b6823b97c23be546c856",
    measurementId: "G-LJ2CR2H8KR"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 


export {auth , provider};

