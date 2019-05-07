import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Channels } from 'src/environments/channels';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { BaseLinePlanejadoService } from 'src/app/service/base-line-planejado/base-line-planejado.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lista-baseline',
  templateUrl: './lista-baseline.component.html',
  styleUrls: ['./lista-baseline.component.css']
})
export class ListaBaselineComponent implements OnInit, OnDestroy {

  public data: any[] = [];
  public cols: any[] = [];
  public actions: any[] = [];
  public title: any = "Baseline";

  public channel: any = Channels.pages.planejamento.plano_de_teste.baseline;
  private _channelPlanoTeste: string = Channels.pages.planejamento.plano_de_teste.plano_de_teste;

  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _router: Router,
    private _baselineService: BaseLinePlanejadoService,
    private _dataService: DataService) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Código', style: 'text-align: left;' },
      { field: 'descricao', header: 'Descrição', style: 'text-align: left;' },
      { field: 'dataInicio', header: 'Data Início', style: 'text-align: center;' },
      { field: 'dataFinal', header: 'Data Fim', style: 'text-align: center;' },
      { field: 'desc_executor', header: 'Executor', style: 'text-align: center;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: left;' }

    ];

    const planoTeste = this._dataService.getData(this._channelPlanoTeste);

    this._baselineService
      .findByPlanoTesteId(0) // FIXME
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(baseLines => this.data = baseLines);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  tableDoubleClick(event) {
    const navigateUrl = 'planejamento/planodeteste/base/caso/listacasoplanejado';
    this._router.navigate([navigateUrl]);
  }
}
