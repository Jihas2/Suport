import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnico } from '../models/tecnico';
import { environment } from '../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
    http = inject(HttpClient);

    API = environment.rotaEndPoint+ "/tecnico";

    constructor() { }

    // findByNome(pesquisa: string): Observable<Tecnico[]>{
    //   let abc = new HttpParams().set('nome', pesquisa);
    //   return this.http.get<Tecnico[]>(this.API+"/findByNome", {params: abc})
    // }

    findAll(): Observable<Tecnico[]>  {
      return this.http.get<Tecnico[]>(this.API+"/todos");
    }

    findById(tecnicoid: number): Observable<Tecnico>{
      return this.http.get<Tecnico>(this.API+"/"+tecnicoid);
    }

    Salvar(tecnico: Tecnico): Observable<string>{
      return this.http.post<string>(this.API+"/salvar",tecnico, {responseType: 'text' as 'json'});
    }

    update(tecnicoid: Tecnico): Observable<string>{
      return this.http.put<string>(this.API+"/atualizar/"+tecnicoid, Tecnico, {responseType: 'text' as 'json'});
    }

    deleteBYiD(tecnicoid:number): Observable<HttpStatusCode.Accepted>{
      return this.http.delete<HttpStatusCode.Accepted>(this.API+"/deletar/" + tecnicoid);
    }
    

}