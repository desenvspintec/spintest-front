import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PubSubService } from 'angular7-pubsub';
import { Channels } from '../../../../../environments/channels';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FornecedorService } from 'src/app/service/fornecedor/fornecedor.service';

@Component({
  selector: 'app-lista-fornecedor',
  templateUrl: './lista-fornecedor.component.html',
  styleUrls: ['./lista-fornecedor.component.css']
})
export class ListaFornecedorComponent implements OnInit, OnDestroy {

  data: any[];
  cols: any[];
  actions: any[];
  empresa: any;
  setEmpresaSub: Subscription;

  constructor(private pubsub: PubSubService,
    private router: Router,
    private messageService: MessageService,
    private fornecedorService: FornecedorService) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Cod.', style: 'text-align: right;' },
      { field: 'descricao', header: 'Descrição.', style: 'text-align: left;' },
      { field: 'telFixo', header: 'Tel. Fixo', style: 'text-align: right;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: center;' },
    ];
    this.actions = [
      {
        label: 'Alterar',
        icon: 'pi pi-pencil',
        command: this.alterar
      }
    ]

    this.setEmpresaSub = this.pubsub.$sub(Channels.pages.cadastro.empresa.fornecedor.lista_fornecedor.set_empresa, empresa => {
      this.empresa = empresa;
    });

    if (!this.empresa || this.empresa === {}) {
      this.messageService.add({ severity: 'error', detail: 'Selecione uma empresa!' });
      this.router.navigate(['cadastro/empresa/emp/listaempresa']);
    } else {
      this.fornecedorService.findByEmpresaId(this.empresa.id, fornecedores => {
        this.data = fornecedores;
      });
    }

  }

  onRowSelectAux(data) {
    this.pubsub.$pub(Channels.pages.cadastro.empresa.produto.lista_produto.set_fornecedor, data);
  }

  ngOnDestroy() {
    this.setEmpresaSub.unsubscribe();
  }

  alterar(registroSelecionado) {
    this.router.navigate(['cadastro/empresa/fornec/cadastrofornecedor']);
  }

}
