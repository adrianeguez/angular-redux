import {Materia} from "./materia";

export type MateriaState = {
  materias: Materia[];
  materiaActual: Materia;
  periodoActual: string;
  todos:any[];
  cargando:boolean;
}
