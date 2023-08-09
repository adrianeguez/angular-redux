import {MateriaState} from "./types/materia.state";

export const initialState:MateriaState =  {
  materias: [],
  todos: [],
  materiaActual: {
    nombre: '',
    descripcion: '',
  },
  periodoActual: '1',
  cargando: false
};
