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

var course_curriculam = {
  course_id: 1002,
  course_name: "Complete Python Mastery",
  topics: [
    {
      topic_id: 1,
      topic_name: "Getting Started",
      lesson: [
        {
          lesson_id: 1,
          lesson_name: "Introduction",
          lesson_duration: "1:40",
          youtube_url: "https://www.youtube.com/embed/fUFyIFyRSAg"
        }
      ]
    },
    {
      topic_id: 2,
      topic_name: "Primitive Types",
      lesson: [
        {
          lesson_id: 1,
          lesson_name: "Web Technologies",
          lesson_duration: "2:48",
          youtube_url: "https://www.youtube.com/embed/fLr-oigWK3Y"
        },
        {
          lesson_id: 2,
          lesson_name: "Install VSCode Editor",
          lesson_duration: "2:33",
          youtube_url: "https://www.youtube.com/embed/X6a1qYDWNM0"
        },
        {
          lesson_id: 3,
          lesson_name: "How the web works",
          lesson_duration: "2:30",
          youtube_url: "https://www.youtube.com/embed/Z4WEYazqMSU"
        },
        {
          lesson_id: 4,
          lesson_name: "How the web works - In Action",
          lesson_duration: "3:50",
          youtube_url: "https://www.youtube.com/embed/8nIyCLaaPjk"
        },
        {
          lesson_id: 5,
          lesson_name: "Chrome Dev Tools",
          lesson_duration: "3:49",
          youtube_url: "https://www.youtube.com/embed/emxpAWosWl8"
        },
        {
          lesson_id: 6,
          lesson_name: "First Html Page",
          lesson_duration: "5:28",
          youtube_url: "https://www.youtube.com/embed/gEZ1FrqCok8"
        },
        {
          lesson_id: 7,
          lesson_name: "CSS Basics in Action",
          lesson_duration: "7:39",
          youtube_url: "https://www.youtube.com/embed/8yGKhD_-qjU"
        },
        {
          lesson_id: 8,
          lesson_name: "Dom & Inspecting Pages",
          lesson_duration: "4:54",
          youtube_url: "https://www.youtube.com/embed/8SCjYlZyKy0"
        }
      ]
    },
    {
      topic_id: 3,
      topic_name: "Control Flow",
      lesson: [
        {
          lesson_id: 1,
          lesson_name: "Head Section",
          lesson_duration: "3:23",
          youtube_url: "https://www.youtube.com/embed/JlMJOHDKO5U"
        },
        {
          lesson_id: 2,
          lesson_name: "Paragraphs and Shortcuts",
          lesson_duration: "5:53",
          youtube_url: "https://www.youtube.com/embed/dzhxEywAbf8"
        },
        {
          lesson_id: 3,
          lesson_name: "Headings",
          lesson_duration: "4:36",
          youtube_url: "https://www.youtube.com/embed/PUCg4D5MgsA"
        },
        {
          lesson_id: 4,
          lesson_name: "Entities",
          lesson_duration: "3:27",
          youtube_url: "https://www.youtube.com/embed/zMRECWQcVCQ"
        },
        {
          lesson_id: 5,
          lesson_name: "Hyperlinks",
          lesson_duration: "8:16",
          youtube_url: "https://www.youtube.com/embed/CwtQouuDSIs"
        },
        {
          lesson_id: 6,
          lesson_name: "Images, Video, Audio",
          lesson_duration: "4:23",
          youtube_url: "https://www.youtube.com/embed/Wu9AUbaTREk"
        },
        {
          lesson_id: 7,
          lesson_name: "Lists",
          lesson_duration: "6:02",
          youtube_url: "https://www.youtube.com/embed/OTddhb9meHw"
        },
        {
          lesson_id: 8,
          lesson_name: "Tables",
          lesson_duration: "7:43",
          youtube_url: "https://www.youtube.com/embed/M29yL8ofLpM"
        },
        {
          lesson_id: 9,
          lesson_name: "Container & Semantic Elements",
          lesson_duration: "4:25",
          youtube_url: "https://www.youtube.com/embed/-V1h_5zkNss"
        }
      ]
    },
    {
      topic_id: 4,
      topic_name: "Functions",
      lesson: [
        {
          lesson_id: 1,
          lesson_name: "Introduction",
          lesson_duration: "1:00",
          youtube_url: "https://www.youtube.com/embed/phDmwgbU5yc"
        },
        {
          lesson_id: 2,
          lesson_name: "Paragraphs and Shortcuts",
          lesson_duration: "5:53",
          youtube_url: "https://www.youtube.com/embed/dzhxEywAbf8"
        },
        {
          lesson_id: 3,
          lesson_name: "Headings",
          lesson_duration: "4:36",
          youtube_url: "https://www.youtube.com/embed/PUCg4D5MgsA"
        },
        {
          lesson_id: 4,
          lesson_name: "Entities",
          lesson_duration: "3:27",
          youtube_url: "https://www.youtube.com/embed/zMRECWQcVCQ"
        },
        {
          lesson_id: 5,
          lesson_name: "Hyperlinks",
          lesson_duration: "8:16",
          youtube_url: "https://www.youtube.com/embed/CwtQouuDSIs"
        },
        {
          lesson_id: 6,
          lesson_name: "Images, Video, Audio",
          lesson_duration: "4:23",
          youtube_url: "https://www.youtube.com/embed/Wu9AUbaTREk"
        },
        {
          lesson_id: 7,
          lesson_name: "Lists",
          lesson_duration: "6:02",
          youtube_url: "https://www.youtube.com/embed/OTddhb9meHw"
        },
        {
          lesson_id: 8,
          lesson_name: "Tables",
          lesson_duration: "7:43",
          youtube_url: "https://www.youtube.com/embed/M29yL8ofLpM"
        },
        {
          lesson_id: 9,
          lesson_name: "Container & Semantic Elements",
          lesson_duration: "4:25",
          youtube_url: "https://www.youtube.com/embed/-V1h_5zkNss"
        }
      ]
    }
  ]
}

var menu = [course_curriculam];

menu.forEach(function (obj) {
  db.collection("courses-details")
    .add(course_curriculam)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
