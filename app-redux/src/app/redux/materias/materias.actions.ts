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
