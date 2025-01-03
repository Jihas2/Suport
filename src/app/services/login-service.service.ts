import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from "jwt-decode"
import { Login } from '../models/login';
import { Usuario } from '../models/usuario';
import { environment } from '../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  http = inject(HttpClient);
  API = environment.rotaEndPoint+ "/login";


  constructor() { }


  logar(login: Login): Observable<string> {
    console.log(login.login, login.senha)
    return this.http.post<string>(this.API, login, {responseType: 'text' as 'json'});
  }

  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  jwtDecode() {
    let token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return "";
  }

  hasPermission(role: string) {
    let user = this.jwtDecode() as Usuario;
    if (user.role == role)
      return true;
    else
      return false;
  }


}
