import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
    http = inject(HttpClient);

    API = "http://localhost:8080/tecnico/todos";
  
    constructor() { }
  
    // findByNome(pesquisa: string): Observable<Tecnico[]>{
    //   let abc = new HttpParams().set('nome', pesquisa);
    //   return this.http.get<Tecnico[]>(this.API+"/findByNome", {params: abc})
    // }
  
    findAll(): Observable<Tecnico[]>  {
      return this.http.get<Tecnico[]>(this.API+"/todos");
    }
  
    // findById(id: number): Observable<Tecnico>{
    //   return this.http.get<Tecnico>(this.API+"/findById/"+id);
    // }
  
    // save(autor: Tecnico): Observable<string>{
    //   return this.http.post<string>(this.API+"/save",autor, {responseType: 'text' as 'json'});
    // }
    
    // update(autor: Tecnico): Observable<string>{
    //   return this.http.put<string>(this.API+"/update/"+autor.id, autor, {responseType: 'text' as 'json'});
    // }
  
    // delete(id: number): Observable<string>{
    //   return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
    // }
  
}