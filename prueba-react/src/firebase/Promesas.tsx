// avanzar mas adelante
import { Guitarra } from "@/interface/InterfaceGuitarra";
import { Usuario } from "@/interface/interfaceUsuario";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./Firebase";

// registros--
// registro de usuarios nuevos
export const registrarUsuario = async (usuario: Usuario) => {
  const docRef = await addDoc(collection(db, "usuarios"), usuario);
};

// registro de guitarras
export const registrarGuitarra = async (guitarra: Guitarra) => {
  const docRef = await addDoc(collection(db, "guitarras"), guitarra);
};
