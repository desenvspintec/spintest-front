import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DataService } from 'src/app/components/services/data-service/data.service';
import { CasoTesteService } from 'src/app/service/caso-teste/caso-teste.service';

// environments
import { Channels } from 'src/environments/channels';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lista-caso-de-teste',
  templateUrl: './lista-caso-de-teste.component.html',
  styleUrls: ['./lista-caso-de-teste.component.css']
})
export class ListaCasoDeTesteComponent implements OnInit, OnDestroy {

  public data: any[] = [];
  public cols: any[];
  public actions: any[] = [];
  public title: any = "Projeto";

  public channel = Channels.pages.cadastro.projeto_de_teste.caso_de_teste;

  private _channelSuiteTeste = Channels.pages.cadastro.projeto_de_teste.suite_de_teste;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _router: Router,
    private _casoTesteService: CasoTesteService,
    private _dataService: DataService,

  ) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Código', style: 'text-align: left;' },
      { field: 'descricao', header: 'Descrição', style: 'text-align: left;' },
      { field: 'objetivo', header: 'Objetivo', style: 'text-align: left;' },
      { field: 'tempo_execucao', header: 'Tempo de Execução (MIN)', style: 'text-align: left;' },
      { field: 'tipo_teste', header: 'Tipo de Execução', style: 'text-align: left;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: left;' }
    ];

    const suite = this._dataService.getData(this._channelSuiteTeste);
    // ;this.title = suite.descricao;

    setTimeout(() => {
      this.data.push({
        id: 1,
        descricao: 'Registro de um novo paciente',
        objetivo: 'Incluir um paciente no banco de dados',
        tempo_execucao: 4,
        situacao: 'ATIVO'
      });

      this.data.push({
        id: 1,
        descricao: 'Registro de um novo paciente',
        objetivo: 'Incluir um paciente no banco de dados',
        tempo_execucao: 4,
        situacao: 'ATIVO'
      });

      this.data.push({
        id: 1,
        descricao: 'Registro de um novo paciente',
        objetivo: 'Incluir um paciente no banco de dados',
        tempo_execucao: 4,
        situacao: 'ATIVO'
      });
    }, 5000);



    this._casoTesteService
      .findBySuiteTesteId(suite.id).
      pipe(takeUntil(this._unsubscribeAll))
      .subscribe(casos => this.data = casos);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  public tableDoubleClick(event) {
    const navigateUrl = 'projetodeteste/projeto/passo/listapasso';
    this._router.navigate([navigateUrl]);
  }

}
