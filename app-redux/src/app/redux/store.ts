import {materiasReducer} from "./materias/materias.reducer";
import {MateriaState} from "./materias/types/materia.state";

export const store = { materias: materiasReducer };

export type StoreType = { materias: MateriaState }
