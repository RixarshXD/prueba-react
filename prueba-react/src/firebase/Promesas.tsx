// avanzar mas adelante
import { Guitarra } from "@/interface/InterfaceGuitarra";
import { Usuario } from "@/interface/InterfaceUsuario";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./Firebase";

// Usuarios
export const registrarUsuario = async (usuario: Usuario) => {
  const docRef = await addDoc(collection(db, "usuarios"), usuario);
};

// guitarras
export const registrarGuitarra = async (guitarra: Guitarra) => {
  const docRef = await addDoc(collection(db, "guitarras"), guitarra);
};

export const recuperarGuitarras = async () => {
  const docRef = collection(db, "guitarras");

  const querySnapshot = await getDocs(docRef);

  let guitarras: Guitarra[] = [];
  querySnapshot.forEach((doc) => {
    let guitarra: Guitarra = {
      modelo: doc.data().modelo,
      cuerdas: doc.data().cuerdas,
      trastes: doc.data().trastes,
      puente: doc.data().puente,
      color: doc.data().color,

      key: doc.id,
    };
    guitarras.push(guitarra);
  });
  return guitarras;
};

export const mostrarGuitarra = async (key: string) => {
  const docRef = doc(db, "guitarras", key);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    let guitarra: Guitarra = {
      modelo: docSnapshot.data().modelo,
      cuerdas: docSnapshot.data().cuerdas,
      trastes: docSnapshot.data().trastes,
      puente: docSnapshot.data().puente,
      color: docSnapshot.data().color,

      key: docSnapshot.data().id,
    };
    return guitarra;
  } else {
    return undefined;
  }
};

// actualizar guitarra

export const actualizarGuitarra = async (g: Guitarra) => {
  const ref = doc(db, "guitarras", g.key!);
  await updateDoc(ref, { ...g });
};
