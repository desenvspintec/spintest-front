import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// services
import { PlanoTesteService } from 'src/app/service/plano-teste/plano-teste.service';

// environments
import { Channels } from 'src/environments/channels';

// rxjs
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lista-plano-de-teste',
  templateUrl: './lista-plano-de-teste.component.html',
  styleUrls: ['./lista-plano-de-teste.component.css']
})
export class ListaPlanoDeTesteComponent implements OnInit, OnDestroy {

  public data: any[] = [];
  public cols: any[] = [];
  public actions: any[] = [];
  public title: any = "Planos de Teste";
  public channel: any = Channels.pages.planejamento.plano_de_teste.plano_de_teste;

  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _router: Router,
    private _planoTesteService: PlanoTesteService
  ) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Código', style: 'text-align: left;' },
      { field: 'descricao', header: 'Descrição', style: 'text-align: left;' },
      { field: 'dataInicio', header: 'Data Início', style: 'text-align: center;', mask: 'dd/MM/yyyy' },
      { field: 'dataFinal', header: 'Data Fim', style: 'text-align: center;', mask: 'dd/MM/yyyy' },
      { field: 'situacao', header: 'Situação', style: 'text-align: left;' }
    ];

    this._planoTesteService
      .findAll()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(planos => this.data = planos);

  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  tableDoubleClick(event) {
    const navigateUrl = 'planejamento/planodeteste/base/listabaseline';
    this._router.navigate([navigateUrl]);
  }

}
