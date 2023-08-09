import {selectMateriaStoreMaterias} from "./select-materia-store-materias";
import {selectMateriaStoreMateriaActual} from "./select-materia-store-materia-actual";
import {selectMateriaStorePeriodoActual} from "./select-materia-store-periodo-actual";
import {selectMateriaStoreTodos} from "./select-materia-store-todos";
import {selectMateriaStoreCargando} from "./select-materia-store-cargando";

export const materiaStoreSelector = {
  selectMateriaStoreMaterias,
  selectMateriaStoreMateriaActual,
  selectMateriaStorePeriodoActual,
  selectMateriaStoreTodos,
  selectMateriaStoreCargando,
}
