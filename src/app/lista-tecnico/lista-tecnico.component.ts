import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnicoService } from '../services/tecnico.service';
import { Tecnico } from '../models/tecnico';

@Component({
  selector: 'app-lista-tecnicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tecnico.component.html',
  styleUrls: ['./lista-tecnico.component.scss']
})
export class ListaTecnicoComponent  {

tecnicos = inject(TecnicoService)

tecList: Tecnico[] = []

  constructor() {
    this.findall()
  }

  findall(){
    this.tecnicos.findAll().subscribe({

      next:value =>{
        this.tecList = value
      },

      error: erro => {
        //mensagme de erro
      }

    })
  }

  }