import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.scss'
})
export class ListaUsuarioComponent {

  usuarios = inject(UsuarioService)
  
  Userlist: Usuario[] = []
  
    constructor() {
      this.findall()
    }
  
    findall(){
      this.usuarios.findAll().subscribe({
  
        next:value =>{
          this.Userlist = value
        },
  
        error: erro => {
          //mensagme de erro
        }
  
      })
    }
  
    }