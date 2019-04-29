import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PubSubService } from 'angular7-pubsub';
import { Channels } from 'src/environments/channels';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit, OnDestroy {


  data: any[];
  cols: any[];
  actions: any[];
  setFornecedorSub: Subscription;
  fornecedor: any;

  constructor(private pubsub: PubSubService,
    private produtoService: ProdutoService,
    private messageService: MessageService,
    private router: Router) { }

   ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Cod.', style: 'text-align: right;'},
      { field: 'descricao', header: 'Descrição.', style: 'text-align: left;'},
      { field: 'situacao', header: 'Situação', style: 'text-align: center;'},
    ];
    this.actions = [
      {
        label: 'Alterar',
        icon: 'pi pi-pencil',
        command: this.alterar
      }
    ];

    this.setFornecedorSub = this.pubsub.$sub(Channels.pages.cadastro.empresa.produto.lista_produto.set_fornecedor, fornecedor => {
      this.fornecedor = fornecedor;
    });

    if (!this.fornecedor || this.fornecedor === {}) {
      this.messageService.add({ severity: 'error', detail: 'Selecione um fornecedor!' });
      this.router.navigate(['cadastro/empresa/fornec/listafornecedor']);
    }else{
      this.produtoService.findByFornecedor(this.fornecedor.id,produtos =>{
        this.data = produtos;
      });
    }

  }

  onRowSelectAux(data){ 
   this.pubsub.$pub(Channels.pages.cadastro.empresa.funcionalidade.lista_funcionalidade.set_produto,data);
  }

  ngOnDestroy() {
    this.setFornecedorSub.unsubscribe();
  }

  alterar(registroSelecionado) {
    this.router.navigate(['cadastro/empresa/prod/cadastroproduto']);
  }

}
