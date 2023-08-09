import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {TodosService} from "../../../services/http/todos.service";
import {establecerTodos, establecerTodosError, fetchTodos} from "../materias.actions";

@Injectable()
export class TodosEffect {

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTodos),
      exhaustMap(
        () => this.todosService.getAll()
          .pipe(
            map(todos => establecerTodos({todos})),
            catchError(() => of(establecerTodosError()))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todosService: TodosService,
  ) {
  }
}
