import { Component, OnInit } from '@angular/core';
import { Channels } from 'src/environments/channels';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FuncionalidadeService } from 'src/app/service/funcionalidade/funcionalidade.service';
import { DataService } from 'src/app/components/services/data-service/data.service';

@Component({
  selector: 'app-lista-funcionalidade',
  templateUrl: './lista-funcionalidade.component.html',
  styleUrls: ['./lista-funcionalidade.component.css']
})
export class ListaFuncionalidadeComponent implements OnInit {

  data: any[];
  cols: any[];
  actions: any[];
  produto: any;
  title: any;
  selectedData: any;
  channel = Channels.pages.cadastro.empresa.funcionalidade;
  
  constructor(private messageService: MessageService,
    private router: Router,
    private funcionalidadeService: FuncionalidadeService,
    private dataService: DataService) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Cod.', style: 'text-align: right;' },
      { field: 'nome', header: 'Nome.', style: 'text-align: left;' },
      { field: 'observacao', header: 'Observação', style: 'text-align: right;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: center;' },
    ];
    this.actions = [];

    this.produto = this.dataService.getData(Channels.pages.cadastro.empresa.produto);
    this.title = this.produto.descricao;
    this.funcionalidadeService.findByProdutoId(this.produto.id, funcionalidades => {
      this.data = funcionalidades;
    });


  }


}
