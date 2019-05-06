import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DataService } from 'src/app/components/services/data-service/data.service';
import { SuiteTesteService } from 'src/app/service/suite-teste/suite-teste.service';

// Enviroments
import { Channels } from 'src/environments/channels';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lista-suite-de-teste',
  templateUrl: './lista-suite-de-teste.component.html',
  styleUrls: ['./lista-suite-de-teste.component.css']
})
export class ListaSuiteDeTesteComponent implements OnInit {

  public data: any[] = [];
  public cols: any[];
  public actions: any[] = [];
  public title: any;

  public channel = Channels.pages.cadastro.projeto_de_teste.suite_de_teste;

  private _channelProjetoTeste = Channels.pages.cadastro.projeto_de_teste.projeto_de_teste;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _router: Router,
    private _suiteTesteService: SuiteTesteService,
    private _dataService: DataService
  ) { }

  ngOnInit() {

    this.cols = [
      { field: 'codigo', header: 'Código', style: 'text-align: left;' },
      { field: 'descricao', header: 'Descrição', style: 'text-align: left;' },
      { field: 'produto', header: 'Produto', style: 'text-align: left;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: left;' }
    ];

    const projeto = this._dataService.getData(this._channelProjetoTeste);
    this.title = projeto.descricao;

    this._suiteTesteService
      .findByProjetoTesteId(projeto.id)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(suites => this.data = suites);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  public tableDoubleClick(event) {
    const navigateUrl = 'projetodeteste/projeto/caso/listacaso';
    this._router.navigate([navigateUrl]);
  }

}
