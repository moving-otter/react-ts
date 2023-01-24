import { collection, getDocs } from 'firebase/firestore/lite';
import fireDB from './fireDB';

// Get a list of cities from your database
export const getTest = async () => {
  const testCol = collection(fireDB, 'test');
  const testSnapshot = await getDocs(testCol);
  const testList = testSnapshot.docs.map((doc) => doc.data());
  const targetData = testList[0] ?? '...';
  console.log(JSON.stringify(targetData, null, 2));
  return targetData;
};
