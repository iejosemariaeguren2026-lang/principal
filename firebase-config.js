
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

// Configuración del proyecto EPT-Eguren-2026
const firebaseConfig = {
  apiKey: "AIzaSyAUgs6KbRFmRBY02ZV2FHikIxI5RVpwKD0",
  authDomain: "ept-eguren-2026.firebaseapp.com",
  projectId: "ept-eguren-2026",
  storageBucket: "ept-eguren-2026.firebasestorage.app",
  messagingSenderId: "1080356970144",
  appId: "1:1080356970144:web:0d6072b5b402e71b09f3c5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicio de autenticación
const auth = getAuth(app);

// Base de datos Firestore
const db = getFirestore(app);

// Exportar servicios para otras páginas
export { app, auth, db };
