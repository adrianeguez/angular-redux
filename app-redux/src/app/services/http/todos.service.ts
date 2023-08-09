import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class TodosService {
  constructor(
    private readonly _httpClient: HttpClient,
  ) {
  }

  getAll(): Observable<any[]> {
    return this._httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map(a => a as any[]))
  }
}
