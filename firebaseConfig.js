import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDVmyuwmJpG0_kpk6rJ1LBQ5os5RAoZH3U",
  authDomain: "proyectogrados.firebaseapp.com",
  projectId: "proyectogrados",
  storageBucket: "proyectogrados.appspot.com",
  messagingSenderId: "820968731033",
  appId: "1:820968731033:web:a79890bab879d3f8d0e308",
  measurementId: "G-04DQV28QV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Correctly initialize analytics