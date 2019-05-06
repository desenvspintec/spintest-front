import { Component, OnInit } from '@angular/core';

// services
import { FuncionalidadeService } from 'src/app/service/funcionalidade/funcionalidade.service';
import { DataService } from 'src/app/components/services/data-service/data.service';

// channels
import { Channels } from 'src/environments/channels';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lista-funcionalidade',
  templateUrl: './lista-funcionalidade.component.html',
  styleUrls: ['./lista-funcionalidade.component.css']
})
export class ListaFuncionalidadeComponent implements OnInit {

  public data: any[] = [];
  public cols: any[];
  public actions: any[] = [];
  public title: any;

  public channel = Channels.pages.cadastro.empresa.funcionalidade;

  private _channelEmpresa: string = Channels.pages.cadastro.empresa.produto;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private funcionalidadeService: FuncionalidadeService,
    private dataService: DataService) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Cod.', style: 'text-align: right;' },
      { field: 'nome', header: 'Nome.', style: 'text-align: left;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: center;' },
    ];

    const produto = this.dataService.getData(this._channelEmpresa);
    this.title = produto.descricao;

    this.funcionalidadeService
      .findByProdutoId(produto.id)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(funcionalidades => this.data = funcionalidades);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
