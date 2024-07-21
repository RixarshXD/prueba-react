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
  deleteDoc,
} from "firebase/firestore";
import { db } from "./Firebase";

// Usuarios
export const registrarUsuario = async (usuario: Usuario) => {
  const docRef = await addDoc(collection(db, "usuarios"), usuario);
};

// mostrar datos de usuarios
export const mostrarUsuario = async (key: string) => {
  const docRef = doc(db, "usuarios", key);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    let usuario: Usuario = {
      nombre: docSnapshot.data().nombre,
      apellido: docSnapshot.data().apellido,
      rut: docSnapshot.data().rut,
      edad: docSnapshot.data().edad,
      fechaNacimiento: docSnapshot.data().fechaNacimiento,
      correo: docSnapshot.data().correo,

      key: docSnapshot.data().id,
    };
    return usuario;
  } else {
    return undefined;
  }
};

// recuperar datos de usuarios
export const recuperarUsuarios = async () => {
  const docRef = collection(db, "usuarios");

  const querySnapshot = await getDocs(docRef);

  let usuarios: Usuario[] = [];
  querySnapshot.forEach((doc) => {
    let usuario: Usuario = {
      nombre: doc.data().nombre,
      apellido: doc.data().apellido,
      rut: doc.data().rut,
      edad: doc.data().edad,
      fechaNacimiento: doc.data().fechaNacimiento,
      correo: doc.data().correo,

      key: doc.id,
    };
    usuarios.push(usuario);
  });
  return usuarios;
};

// actualizacion de usuario
export const actualizarUsuario = async (u: Usuario) => {
  const ref = doc(db, "usuarios", u.key!);
  await updateDoc(ref, { ...u });
};
// eliminacion de usuarios
export const eliminarUsuario = async (u: Usuario) => {
  const ref = doc(db, "usuarios", u.key!);
  await deleteDoc(ref);
};

// guitarras
// registro de guitarras
export const registrarGuitarra = async (guitarra: Guitarra) => {
  const docRef = await addDoc(collection(db, "guitarras"), guitarra);
};

// recuperar datos de guitarras
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

// mostrar guitarras
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

// eliminar guitarra

export const eliminarGuitarra = async (g: Guitarra) => {
  const ref = doc(db, "guitarras", g.key!);
  await deleteDoc(ref);
};
