import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PubSubService } from 'angular7-pubsub';
import { Channels } from 'src/environments/channels';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FuncionalidadeService } from 'src/app/service/funcionalidade/funcionalidade.service';


@Component({
  selector: 'app-lista-funcionalidade',
  templateUrl: './lista-funcionalidade.component.html',
  styleUrls: ['./lista-funcionalidade.component.css']
})
export class ListaFuncionalidadeComponent implements OnInit, OnDestroy {

  data: any[];
  cols: any[];
  actions: any[];
  produto: any;
  setProdutoSub: Subscription;

  constructor(private pubsub: PubSubService,
    private messageService: MessageService,
    private router: Router,
    private funcionalidadeService: FuncionalidadeService) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Cod.', style: 'text-align: right;' },
      { field: 'nome', header: 'Nome.', style: 'text-align: left;' },
      { field: 'observacao', header: 'Observação', style: 'text-align: right;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: center;' },
    ];
    this.actions = [
      {
        label: 'Alterar',
        icon: 'pi pi-pencil',
        command: this.alterar
      }
    ];

    this.setProdutoSub = this.pubsub.$sub(Channels.pages.cadastro.empresa.funcionalidade.lista_funcionalidade.set_produto, produto => {
      this.produto = produto;
    });

    if (!this.produto || this.produto === {}) {
      this.messageService.add({ severity: 'error', detail: 'Selecione um produto!' });
      this.router.navigate(['cadastro/empresa/prod/listaproduto']);
    } else {
      this.funcionalidadeService.findByProdutoId(this.produto.id, funcionalidades => {
        this.data = funcionalidades;
      });
    }

  }

  ngOnDestroy() {
    this.setProdutoSub.unsubscribe();
  }

  alterar(registroSelecionado) {
    this.router.navigate(['cadastro/empresa/func/cadastrofuncionalidade']);
  }

}
