import {createSelector} from "@ngrx/store";
import {StoreType} from "../../store";
import {MateriaState} from "../types/materia.state";

export const selectMateriaStoreMaterias = createSelector(
  (state: StoreType) => state.materias,
  (state: MateriaState) => state.materias
);
