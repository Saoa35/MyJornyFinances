import {initializeApp} from 'firebase/app';

import {getFirestore, collection} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC4XIIx9_s9q0teRdaZhVgqKav_YvafR-4',
  authDomain: 'myjourneycosts.firebaseapp.com',
  projectId: 'myjourneycosts',
  storageBucket: 'myjourneycosts.appspot.com',
  messagingSenderId: '303238821671',
  appId: '1:303238821671:web:06645ae0442901e3929b02',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips');
export const financesRef = collection(db, 'finances');

export default app;
