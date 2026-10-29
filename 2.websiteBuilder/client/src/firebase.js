// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import {getAuth, GoogleAuthProvider} from "firebase/auth"
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "genwebai-dbb06.firebaseapp.com",
//   projectId: "genwebai-dbb06",
//   storageBucket: "genwebai-dbb06.firebasestorage.app",
//   messagingSenderId: "991900800026",
//   appId: "1:991900800026:web:84b905ccab6e1ea2c16da3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth= getAuth(app)
// const provider=new GoogleAuthProvider()

// export {auth,provider}


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-a753d.firebaseapp.com",
  projectId: "genwebai-a753d",
  storageBucket: "genwebai-a753d.firebasestorage.app",
  messagingSenderId: "846369246768",
  appId: "1:846369246768:web:c0bb4f4a9e6400e06d67f5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

