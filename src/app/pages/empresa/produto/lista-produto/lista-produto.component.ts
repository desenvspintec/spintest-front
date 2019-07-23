import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// services
import { DataService } from 'src/app/components/services/data-service/data.service';
import { ProdutoService } from 'src/app/service/produto/produto.service';

// environments
import { Channels } from 'src/environments/channels';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit, OnDestroy {

  public data: any[] = [];
  public cols: any[];
  public actions: any[] = [];

  public title: any;
  public selectedData: any;

  public channel: string = Channels.pages.cadastro.empresa.produto;
  
  private _channelFornecedor: string = Channels.pages.cadastro.empresa.fornecedor;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Código', style: 'text-align: right;' },
      { field: 'descricao', header: 'Descrição.', style: 'text-align: left;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: center;' },
    ];

    const fornecedor = this.dataService.getData(this._channelFornecedor);

    this.title = fornecedor.descricao;

    this.produtoService
    .findByFornecedor(fornecedor.id)
    .subscribe(produtos => this.data = produtos);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  tableDoubleClick(event) {
    this.router.navigate(['cadastro/empresa/func/listafuncionalidade']);
  }

}
