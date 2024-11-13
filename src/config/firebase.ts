import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // your Firebase config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
