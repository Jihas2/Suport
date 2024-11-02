import { Injectable } from '@angular/core';
import { Tecnico } from '../models/tecnico';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  private apiUrl = 'http://localhost:8080/tecnico';
  private listaCache: Tecnico[] | null = null;

  constructor(private http: HttpClient) {}

  getLista(): Observable<Tecnico[]> {
    if (this.listaCache) {
      return of(this.listaCache);
    } else {
      return this.http.get<Tecnico[]>(this.apiUrl + "/todos").pipe(
        tap(data => this.listaCache = data)
      );
    }
  }
  
}
