import {createAction, props} from '@ngrx/store';
import {Materia} from "./types/materia";
import {PeriodoActual} from "./types/periodo-actual";

export const agregarMateria = createAction(
  '[Materia Component] AgregarMateria',
  props<Materia>(),
);
export const establecerMateriaActual = createAction(
  '[Materia Component] EstablecerMateriaActual',
  props<Materia>(),
);
export const establecerPeriodoActual = createAction(
  '[Materia Component] EstablecerPeriodoActual',
  props<{ periodo: PeriodoActual }>(),
);
export const cargando = createAction(
  '[Todos Service] Cargando',
  props<{ cargando: boolean }>(),
);
export const fetchTodos = createAction(
  '[Todos Service] Fetch Todos'
);
export const establecerTodos = createAction(
  '[Todos Service] Load Todos',
  props<{ todos: any[] }>(),
);
export const establecerTodosError = createAction(
  '[Todos Service] Todos Loaded Error',
);
