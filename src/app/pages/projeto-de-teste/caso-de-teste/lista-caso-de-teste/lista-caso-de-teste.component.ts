import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DataService } from 'src/app/components/services/data-service/data.service';
import { CasoTesteService } from 'src/app/service/caso-teste/caso-teste.service';

// environments
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-lista-caso-de-teste',
  templateUrl: './lista-caso-de-teste.component.html',
  styleUrls: ['./lista-caso-de-teste.component.css']
})
export class ListaCasoDeTesteComponent implements OnInit {

  public data = [
    { codigo: 54347, id: 1, descricao: 'Projeto 1' }
  ];

  public cols: any[];
  public actions: any[] = [];
  public title: any = "Projeto";

  public channel = Channels.pages.cadastro.projeto_de_teste.caso_de_teste;

  private _channelSuiteTeste = Channels.pages.cadastro.projeto_de_teste.suite_de_teste;

  constructor(
    private _router: Router,
    private _casoTesteService: CasoTesteService,
    private _dataService: DataService,

  ) { }

  ngOnInit() {

    this.cols = [
      { field: 'codigo', header: 'Código', style: 'text-align: left;' },
      { field: 'descricao', header: 'Descrição', style: 'text-align: left;' },
      { field: 'tempo_execucao', header: 'Tempo de Execução (MIN)', style: 'text-align: left;' },
      { field: 'tipo_teste', header: 'Tipo de Execução', style: 'text-align: left;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: left;' }
    ];

    const suite = this._dataService.getData(this._channelSuiteTeste);
    this.title = suite.descricao;

    this._casoTesteService
      .findBySuiteTesteId(suite.id, casos => {
        this.data = casos;
      });

  }

  public tableDoubleClick(event) {
    const navigateUrl = 'projetodeteste/projeto/passo/listapasso';
    this._router.navigate([navigateUrl]);
  }

}
