import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { PassoTesteService } from 'src/app/service/passo-teste/passo-teste.service';
import { DataService } from 'src/app/components/services/data-service/data.service';

// channels
import { Channels } from 'src/environments/channels';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lista-passo-de-teste',
  templateUrl: './lista-passo-de-teste.component.html',
  styleUrls: ['./lista-passo-de-teste.component.css']
})
export class ListaPassoDeTesteComponent implements OnInit {

  public data: any[] = [];
  public actions: any[] = [];
  public cols: any[] = [];
  public title: string;

  public channel = Channels.pages.cadastro.projeto_de_teste.passo_de_teste;

  private _channelCasoTeste = Channels.pages.cadastro.projeto_de_teste.caso_de_teste;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _router: Router,
    private _passoTesteService: PassoTesteService,
    private _dataService: DataService,
  ) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Código', style: 'text-align: left;' },
      { field: 'acao', header: 'Ação do Passo', style: 'text-align: left;' },
      { field: 'resultado', header: 'Resultado esperado', style: 'text-align: left;' },
      { field: 'tipoTeste', header: 'Tipo de Execução', style: 'text-align: left;' },
      { field: 'sequencia', header: 'Seq. Exec.', style: 'text-align: left;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: left;' }
    ];

    const casoTeste = this._dataService.getData(this._channelCasoTeste);
    this.title = casoTeste.descricao;

    this._passoTesteService
      .findByCasoTesteId(casoTeste.id)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(passos => this.data = passos);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  public tableDoubleClick(event) {
    const navigateUrl = 'planejamento/planodeteste/plteste/listaplanodeteste';
    this._router.navigate([navigateUrl]);
  }
}
