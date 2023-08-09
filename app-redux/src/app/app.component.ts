import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {StoreType} from "./redux/store";
import {Observable} from "rxjs";
import {materiaStoreSelector} from "./redux/materias/selectors/materia-store.selector";
import {Materia} from "./redux/materias/types/materia";
import {PeriodoActual} from "./redux/materias/types/periodo-actual";
import {agregarMateria, establecerMateriaActual, establecerPeriodoActual} from "./redux/materias/materias.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  materiaActualState$!: Observable<Materia>;
  materiasState$!: Observable<Materia[]>;
  periodoActualState$!: Observable<PeriodoActual>;

  constructor(private store: Store<StoreType>) {
    this.materiasState$ = this.store.select(materiaStoreSelector.selectMateriaStoreMaterias);
    this.materiaActualState$ = this.store.select(materiaStoreSelector.selectMateriaStoreMateriaActual);
    this.periodoActualState$ = this.store.select(materiaStoreSelector.selectMateriaStorePeriodoActual);
  }

  setearPeriodoActual(): void {
    this.store.dispatch(establecerPeriodoActual({periodo: new Date().getTime().toString()}))
  }

  anadirMateria(): void {
    this.store.dispatch(agregarMateria({nombre: `Nombre: ${new Date().getTime().toString()}`, descripcion: 'DESC'}))
  }

  establecerMateriaActual(materia: Materia): void {
    this.store.dispatch(establecerMateriaActual(materia))
  }
}
