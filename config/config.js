import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAqBBCrRhZ4dqe34jXe2YKZXfBQ34vxGSQ",
  authDomain: "adstories-c85b4.firebaseapp.com",
  databaseURL: "https://adstories-c85b4.firebaseio.com",
  projectId: "adstories-c85b4",
  storageBucket: "adstories-c85b4.appspot.com",
  messagingSenderId: "760246146982",
  appId: "1:760246146982:web:1b430997b28d1559a9a167",
  measurementId: "G-D482SY269R"
};

firebase.initializeApp(config);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
