import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export const retrieveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

export const retrieveDataById = async (collectionName: string, id: string) => {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
};

// SIGNIN
export const signIn = async (userData: { email: string }) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email) // mengecek email yang mau didaftarkan sudah terdaftar atau belum
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data) {
    return data[0];
  } else {
    return null;
  }
};

// SIGNUP
export const signUp = async (
  userData: {
    email: string;
    password: string;
    fullname: string;
    role?: string;
  },
  callback: Function
) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email) // mengecek email yang mau didaftarkan sudah terdaftar atau belum
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback({ status: false, message: "Email already exists" });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({ status: true, message: "Register Success" });
      })
      .catch((error: any) => {
        callback({ status: false, message: error });
      });
  }
};

// SIGNIN WITH GOOGLE
export const signInWithGoogle = async (userData: any, callback: any) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email) // mengecek email yang mau didaftarkan sudah terdaftar atau belum
  );

  const snapshot = await getDocs(q);
  const data: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    userData.role = data[0].role;
    await updateDoc(doc(firestore, "users", data[0].id), userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign In With Google Success",
          data: userData,
        });
      })
      .catch((error: any) => {
        callback({ status: false, message: "Sign In With Google Failed" });
      });
  } else {
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign In With Google Success",
          data: userData,
        });
      })
      .catch((error: any) => {
        callback({ status: false, message: "Sign In With Google Failed" });
      });
  }
};
