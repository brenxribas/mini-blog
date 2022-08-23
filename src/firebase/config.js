import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUuoWXIKgu8WxJdSa99tHmK8l9GlMAMB8",
    authDomain: "miniblog-67f6b.firebaseapp.com",
    projectId: "miniblog-67f6b",
    storageBucket: "miniblog-67f6b.appspot.com",
    messagingSenderId: "18888584805",
    appId: "1:18888584805:web:e64291793e1a7243d4608c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};