import { Injectable, inject } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  http = inject(HttpClient);

    API = "http://localhost:8080/usuarios";

    constructor() { }

    // findByNome(pesquisa: string): Observable<Tecnico[]>{
    //   let abc = new HttpParams().set('nome', pesquisa);
    //   return this.http.get<Tecnico[]>(this.API+"/findByNome", {params: abc})
    // }

    findAll(): Observable<Usuario[]>  {
      return this.http.get<Usuario[]>(this.API+"/todos");
    }

    findById(usuarioid: number): Observable<Usuario>{
      return this.http.get<Usuario>(this.API+"/"+usuarioid);
    }

    salvar(Usuario: Usuario): Observable<string>{
      return this.http.post<string>(this.API+"/salvar",Usuario, {responseType: 'text' as 'json'});
    }

    update(Usuarioid: Usuario): Observable<string>{
      return this.http.put<string>(this.API+"/atualizar/"+Usuarioid, Usuario, {responseType: 'text' as 'json'});
    }

    deleteById(usuarioid:number): Observable<HttpStatusCode.Accepted>{
      return this.http.delete<HttpStatusCode.Accepted>(this.API+"/deletar/" + usuarioid);
    }
    
}