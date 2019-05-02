import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Channels } from 'src/environments/channels';
import { DataService } from 'src/app/components/services/data-service/data.service';

@Component({
  selector: 'app-lista-baseline',
  templateUrl: './lista-baseline.component.html',
  styleUrls: ['./lista-baseline.component.css']
})
export class ListaBaselineComponent implements OnInit {

  data: any[];
  cols: any[];
  actions: any[];
  title: any = "Baseline";
  channel: any = Channels.pages.planejamento.plano_de_teste.baseline;

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
