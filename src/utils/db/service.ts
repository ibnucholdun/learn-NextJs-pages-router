import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./firebase";

const firestore = getFirestore(app);

export const retrieveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};
