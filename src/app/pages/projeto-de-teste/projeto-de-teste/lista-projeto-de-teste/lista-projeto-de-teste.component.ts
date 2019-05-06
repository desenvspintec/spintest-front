import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// environments
import { Channels } from 'src/environments/channels';
import { ProjetoTesteService } from 'src/app/service/projeto-teste/projeto-teste.service';
import { ProdutoService } from 'src/app/service/produto/produto.service';

// rxjs
import { forkJoin, Subject, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lista-projeto-de-teste',
  templateUrl: './lista-projeto-de-teste.component.html',
  styleUrls: ['./lista-projeto-de-teste.component.css']
})
export class ListaProjetoDeTesteComponent implements OnInit, OnDestroy {

  public data: any[] = [];
  public cols: any[];
  public actions: any[] = [];
  public title: any = "Projeto";

  public channel: any = Channels.pages.cadastro.projeto_de_teste.projeto_de_teste;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _produtosService: ProdutoService,
    private _projetoTesteService: ProjetoTesteService,
    private _router: Router
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Código', style: 'text-align: left;' },
      { field: 'descricao', header: 'Descrição', style: 'text-align: left;' },
      { field: 'desc_produto', header: 'Produto', style: 'text-align: left;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: left;' }
    ];

    this._getData().pipe(
      takeUntil(this._unsubscribeAll),
      map(([projetos, produtos]: any) => {
        this.data = projetos.map(projeto => {
          const produto = produtos.find(v => v.id === projeto.produtoId);
          projeto['desc_produto'] = produto.descricao;
          return projeto;
        });
      })).subscribe();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  private _getData(): Observable<[Object, Object]> {
    return forkJoin([
      this._projetoTesteService.findAll(),
      this._produtosService.findAll(),
    ]);
  }

  public tableDoubleClick(event) {
    debugger;
    this._router.navigate(['projetodeteste/projeto/suite/listasuite']);
  }

}
