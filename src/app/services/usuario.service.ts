import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/tecnico';
  private listaCache: Usuario[] | null = null;

  constructor(private http: HttpClient) {}

  getLista(): Observable<Usuario[]> {
    if (this.listaCache) {
      return of(this.listaCache);
    } else {
      return this.http.get<Usuario[]>(this.apiUrl + "/todos").pipe(
        tap(data => this.listaCache = data)
      );
    }
  }

}