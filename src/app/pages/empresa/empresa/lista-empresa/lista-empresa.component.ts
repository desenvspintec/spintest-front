import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.css']
})
export class ListaEmpresaComponent implements OnInit {
  data: any[];
  cols: any[];
  actions: any[];
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Código'},
      { field: 'funcao.nome', header: 'Função' },
      { field: 'valorAlcada', header: 'Valor máximo', style: 'text-align: right;', currency: 'true' }
    ];

  }

}
