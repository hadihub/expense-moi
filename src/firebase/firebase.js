import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Web app's Firebase configuration

var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: "https://expense-moi.firebaseio.com",
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((child) => {
//     expenses.push({
//       id: child.key,
//       ...child.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Pain",
//   note: "je passe tout les matin pour acheter le pain",
//   amout: 300,
//   createdAt: 976123498763,
// });

// database.ref("expenses").push({
//   description: "Pain",
//   note: "je passe tout les matin pour acheter le pain",
//   amout: 300,
//   createdAt: 976123498763,
// });
// database.ref("expenses").push({
//   description: "Yaourt",
//   note: "liberté fraise",
//   amout: 500,
//   createdAt: 976123498763,
// });
// database.ref("expenses").push({
//   description: "Legumes",
//   note: "Marcher 440",
//   amout: 2000,
//   createdAt: 976123498763,
// });
