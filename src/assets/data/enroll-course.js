const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAOSxxl6neaMWK7k1JjpF4J6LPHgKZrvLc",
  authDomain: "codewithfarooq.firebaseapp.com",
  databaseURL: "https://codewithfarooq-default-rtdb.firebaseio.com",
  projectId: "codewithfarooq",
  storageBucket: "codewithfarooq.appspot.com",
  messagingSenderId: "278757395319",
  appId: "1:278757395319:web:2fdba06d1aab0e60fdef72",
  measurementId: "G-2T4JCYM9GZ",
});

var db = firebase.firestore();

var menu = [
  {
    id: 1001,
    name: "Angular",
    price: "FREE",
  },
  {
    id: 1002,
    name: "React",
    price: "FREE",
  },
  {
    id: 1003,
    name: "HTML/CSS",
    price: "FREE",
  },
  {
    id: 1004,
    name: "NodeJS",
    price: "FREE",
  },
  {
    id: 1005,
    name: "Python",
    price: "FREE",
  },
  {
    id: 1006,
    name: "React Native",
    price: "FREE",
  },
  {
    id: 1007,
    name: "Javascript",
    price: "FREE",
  },
  {
    id: 1009,
    name: "Java",
    price: "FREE",
  },
];

menu.forEach(function (obj) {
  db.collection("courses-list")
    .add({
      id: obj.id,
      name: obj.name,
      price: obj.price,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
