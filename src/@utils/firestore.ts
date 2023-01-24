import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyC5NnEXy55OCkX0rY46TK-Nz2suCV201W4',
  authDomain: 'hw-site.firebaseapp.com',
  projectId: 'hw-site',
  storageBucket: 'hw-site.appspot.com',
  messagingSenderId: '230730258467',
  appId: '1:230730258467:web:a7ed10b992db3cc7477996',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
const getTest = async (db) => {
  const testCol = collection(db, 'test');
  const testSnapshot = await getDocs(testCol);
  const testList = testSnapshot.docs.map((doc) => doc.data());
  const targetData = testList[0] ?? '...';
  console.log(JSON.stringify(targetData, null, 2));
  return targetData;
};

getTest(db);
