// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAdhiW3Q9ojW6ZxtitF05mUZbukBK2zX5I",
//   authDomain: "findgf-ai.firebaseapp.com",
//   projectId: "findgf-ai",
//   storageBucket: "findgf-ai.firebasestorage.app",
//   messagingSenderId: "394318773102",
//   appId: "1:394318773102:web:0edf9cdd2e2e0171689f7f",
//   measurementId: "G-TKHT4C08HP",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Initialize Analytics only in browser
// let analytics: ReturnType<typeof getAnalytics> | null = null;

// if (typeof window !== "undefined") {
//   isSupported().then((yes) => {
//     if (yes) {
//       analytics = getAnalytics(app);
//     }
//   });
// }

// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
// export default db;
// export { app, analytics };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";   // ✅ Add this

const firebaseConfig = {
apiKey: "AIzaSyDYd_tnC2MB62jYKoBZjd-USarv5eULI1Q",
  authDomain: "dcodes-bf8b1.firebaseapp.com",
  projectId: "dcodes-bf8b1",
  storageBucket: "dcodes-bf8b1.firebasestorage.app",
  messagingSenderId: "820999247344",
  appId: "1:820999247344:web:dc127ed394bc8ab6e5f935",
  measurementId: "G-WJTC4MCKRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

// Storage
export const storage = getStorage(app);   
  // ✅ Add this

// Analytics (browser only)
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default db;
export { app, analytics };
