import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const fireStoreConfig = {
  apiKey: 'AIzaSyC5NnEXy55OCkX0rY46TK-Nz2suCV201W4',
  authDomain: 'hw-site.firebaseapp.com',
  projectId: 'hw-site',
  storageBucket: 'hw-site.appspot.com',
  messagingSenderId: '230730258467',
  appId: '1:230730258467:web:a7ed10b992db3cc7477996',
};

// Initialize Firebase
const app = initializeApp(fireStoreConfig);
const fireDB = getFirestore(app);

export default fireDB;
