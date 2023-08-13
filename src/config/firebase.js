// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore, collection} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4XIIx9_s9q0teRdaZhVgqKav_YvafR-4',
  authDomain: 'myjourneycosts.firebaseapp.com',
  projectId: 'myjourneycosts',
  storageBucket: 'myjourneycosts.appspot.com',
  messagingSenderId: '303238821671',
  appId: '1:303238821671:web:06645ae0442901e3929b02',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips');
export const financesRef = collection(db, 'finances');

export default app;
