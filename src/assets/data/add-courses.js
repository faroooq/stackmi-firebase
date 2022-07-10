// Run this file: right click > run code
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
    img_name: "html-css.jpeg",
    name: "Mastering HTML - Part 1",
    description:
      "Master advanced HTML5 & CSS3 concepts behind fast, beautiful and mobile-friendly websites.",
    price: "FREE",
    button_enabled: true,
  },
  {
    id: 1002,
    img_name: "html-css.jpeg",
    name: "Mastering HTML - Part 2",
    description:
      "Master advanced HTML5 & CSS3 concepts behind fast, beautiful and mobile-friendly websites.",
    price: "FREE",
    button_enabled: true,
  },
  {
    id: 1003,
    img_name: "html-css.jpeg",
    name: "Mastering HTML - Part 3",
    description:
      "Master advanced HTML5 & CSS3 concepts behind fast, beautiful and mobile-friendly websites.",
    price: "FREE",
    button_enabled: true,
  },
  {
    id: 1004,
    img_name: "html-css.jpeg",
    name: "Mastering HTML - Part 4",
    description:
      "Master advanced HTML5 & CSS3 concepts behind fast, beautiful and mobile-friendly websites.",
    price: "FREE",
    button_enabled: true,
  },
  {
    id: 1005,
    img_name: "javascript.jpeg",
    name: "Mastering Javascript",
    description:
      "Master all the JavaScript skills you need to land a full-stack developer job",
    price: "FREE",
    button_enabled: true,
  },
  {
    id: 1006,
    img_name: "angular-pro.jpeg",
    name: "Angular 10: Professional",
    description:
      "Build professional, interactive apps with Angular - the most popular framework for building web apps.",
    price: "FREE",
    button_enabled: true,
  },
  {
    id: 1007,
    img_name: "react.jpeg",
    name: "React: Professional",
    description:
      "Don't get left behind. React is the way forward to building fast, interactive web apps.",
    price: "FREE",
    button_enabled: true,
  },
  {
    id: 1008,
    img_name: "nodejs.png",
    name: "The Complete Node.js Course",
    description:
      "Learn to build highly-scalable, fast and secure RESTful APIs with Node, Express, and MongoDB.",
    price: "FREE",
    button_enabled: true,
  },
  {
    id: 1009,
    img_name: "python.jpeg",
    name: "Python for Beginner",
    description:
      "Everything you need to program in Python in one course (includes 3 real-world projects)",
    price: "FREE",
    button_enabled: true,
  },
  {
    id: 1010,
    img_name: "java.jpeg",
    name: "Java Professional",
    description:
      "Master Java - the most popular programming language underpinning most apps and websites",
    price: "FREE",
    button_enabled: true,
  },
  {
    id: 1011,
    img_name: "git.jpeg",
    name: "Ultimate Git Course",
    description:
      "Everything you need to know to use Git & GitHub to work effectively as a team",
    price: "FREE",
    button_enabled: true,
  }
];

menu.forEach(function (obj) {
  db.collection("courses")
    .add({
      id: obj.id,
      img_name: obj.img_name,
      name: obj.name,
      description: obj.description,
      price: obj.price,
      button_enabled: obj.button_enabled,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
