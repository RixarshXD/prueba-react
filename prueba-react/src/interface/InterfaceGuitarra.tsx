export interface Guitarra {
  modelo: string;
  cuerdas: number;
  trastes: number;
  puente: string;
  color: string;
  // el ? significa que puede ser opcional
  key?: string;
}
