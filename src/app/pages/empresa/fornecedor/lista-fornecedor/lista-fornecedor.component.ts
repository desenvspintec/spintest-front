import { Component, OnInit } from '@angular/core';
import { Channels } from '../../../../../environments/channels';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FornecedorService } from 'src/app/service/fornecedor/fornecedor.service';
import { DataService } from 'src/app/components/services/data-service/data.service';

@Component({
  selector: 'app-lista-fornecedor',
  templateUrl: './lista-fornecedor.component.html',
  styleUrls: ['./lista-fornecedor.component.css']
})
export class ListaFornecedorComponent implements OnInit {

  data: any[];
  cols: any[];
  actions: any[];
  empresa: any;
  title: any;
  selectedData: any;
  channel = Channels.pages.cadastro.empresa.fornecedor;

  constructor(private router: Router,
    private messageService: MessageService,
    private fornecedorService: FornecedorService,
    private dataService: DataService) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Cod.', style: 'text-align: right;' },
      { field: 'descricao', header: 'Descrição.', style: 'text-align: left;' },
      { field: 'telFixo', header: 'Tel. Fixo', style: 'text-align: right;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: center;' },
    ];

    this.actions = [];
    this.empresa = this.dataService.getData(Channels.pages.cadastro.empresa.empresa);
    this.title = this.empresa.nome;
    this.fornecedorService.findByEmpresaId(this.empresa.id, fornecedores => {
      this.data = fornecedores;
    });
  }

  tableDoubleClick(event) {
    this.router.navigate(['cadastro/empresa/prod/listaproduto']);
  }

}
