import {createReducer} from '@ngrx/store';
import {
  agregarMateria, cargando,
  establecerMateriaActual,
  establecerPeriodoActual,
  establecerTodos,
  establecerTodosError, fetchTodos
} from "./materias.actions";
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
    immerOn(fetchTodos, (state) => {
      state.cargando = true
      state.todos = []
    }),
    immerOn(cargando, (state, action) => {
      state.cargando = action.cargando
    }),
    immerOn(establecerTodos, (state, action) => {
      state.todos = action.todos
      state.cargando = false
    }),
    immerOn(establecerTodosError, (state) => {
      state.todos = []
      state.cargando = false
    }),
  )
;
