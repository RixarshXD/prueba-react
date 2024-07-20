export interface Usuario {
  nombre: string;
  apellido: string;
  rut: string;
  edad: number;
  fechaNacimiento: string;
  correo: string;

  // el ? significa que puede ser opcional
  key?: string;
}
