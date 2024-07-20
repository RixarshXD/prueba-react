export interface Guitarra {
  modelo: string;
  cuerdas: number;
  trastes: number;
  puente: number;
  color: string;
  // el ? significa que puede ser opcional
  key?: string;
}
