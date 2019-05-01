import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Channels } from 'src/environments/channels';
import { DataService } from 'src/app/components/services/data-service/data.service';

@Component({
  selector: 'app-lista-plano-de-teste',
  templateUrl: './lista-plano-de-teste.component.html',
  styleUrls: ['./lista-plano-de-teste.component.css']
})
export class ListaPlanoDeTesteComponent implements OnInit {


  data: any[];
  cols: any[];
  actions: any[];
  title: any = "Plano de Teste";
  channel: any = Channels.pages.planejamento.plano_de_teste.plano_de_teste;

  constructor(private router: Router,
    private dataService: DataService) { }

  ngOnInit() {
    this.cols = [
      { field: 'descricao', header: 'Descrição', style: 'text-align: left;' },
      { field: 'dataInicio', header: 'Data Início', style: 'text-align: center;' },
      { field: 'dataFinal', header: 'Data Fim', style: 'text-align: center;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: left;' }

    ];
    this.actions = [];
   /* this.empresaService.findAll((pessoas) => {
      this.data = pessoas;
    });*/
  }

  tableDoubleClick(event) {
   
  }

}
