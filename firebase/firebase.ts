import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: process.env.GOOGLE_API,
  authDomain: "zreact.firebaseapp.com",
  projectId: "zreact",
  storageBucket: "zreact.appspot.com",
  messagingSenderId: "21886633661",
  appId: "1:21886633661:web:ceb23c94fff1a7b7abd9d4",
  measurementId: "G-EZN529D9E6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
