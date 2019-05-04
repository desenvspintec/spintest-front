import { Component, OnInit } from '@angular/core';

// services
import { FuncionalidadeService } from 'src/app/service/funcionalidade/funcionalidade.service';
import { DataService } from 'src/app/components/services/data-service/data.service';

// channels
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-lista-funcionalidade',
  templateUrl: './lista-funcionalidade.component.html',
  styleUrls: ['./lista-funcionalidade.component.css']
})
export class ListaFuncionalidadeComponent implements OnInit {

  public data: any[] = [];
  public cols: any[];
  public actions: any[];
  public title: any;

  public channel = Channels.pages.cadastro.empresa.funcionalidade;

  private _produto: any;
  private _channelEmpresa: string = Channels.pages.cadastro.empresa.produto;

  constructor(
    private funcionalidadeService: FuncionalidadeService,
    private dataService: DataService) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Cod.', style: 'text-align: right;' },
      { field: 'nome', header: 'Nome.', style: 'text-align: left;' },
      { field: 'observacao', header: 'Observação', style: 'text-align: right;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: center;' },
    ];

    this._produto = this.dataService.getData(this._channelEmpresa);
    this.title = this._produto.descricao;

    this.funcionalidadeService.findByProdutoId(this._produto.id, funcionalidades => {
      this.data = funcionalidades;
    });


  }


}
