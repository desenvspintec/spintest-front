import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Channels } from 'src/environments/channels';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { DataService } from 'src/app/components/services/data-service/data.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {


  data: any[];
  cols: any[];
  actions: any[];
  setFornecedorSub: Subscription;
  fornecedor: any;
  title: any;
  selectedData: any;
  channel = Channels.pages.cadastro.empresa.produto;
  
  constructor(private produtoService: ProdutoService,
    private messageService: MessageService,
    private router: Router,
    private dataService: DataService) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Cod.', style: 'text-align: right;' },
      { field: 'descricao', header: 'Descrição.', style: 'text-align: left;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: center;' },
    ];
    this.actions = [];

    this.fornecedor = this.dataService.getData(Channels.pages.cadastro.empresa.fornecedor);
    this.title = this.fornecedor.descricao;
    this.produtoService.findByFornecedor(this.fornecedor.id, produtos => {
      this.data = produtos;
    });
  }

  tableDoubleClick(event) {
    this.router.navigate(['cadastro/empresa/func/listafuncionalidade']);
  }



}
