import {createReducer} from '@ngrx/store';
import {agregarMateria, establecerMateriaActual, establecerPeriodoActual} from "./materias.actions";
import {initialState} from "./materia.initial.state";
import {immerOn} from "ngrx-immer/store";


export const materiasReducer = createReducer(
  initialState,
  immerOn(agregarMateria, (state, action) => {
    state.materias = [...state.materias, action]
  }),
  immerOn(establecerMateriaActual, (state, action) => {
    state.materiaActual = action
  }),
  immerOn(establecerPeriodoActual, (state, action) => {
    state.periodoActual = action.periodo
  }),
)
;
