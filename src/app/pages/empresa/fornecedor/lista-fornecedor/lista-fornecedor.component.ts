import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { FornecedorService } from 'src/app/service/fornecedor/fornecedor.service';
import { DataService } from 'src/app/components/services/data-service/data.service';

// Enviroments
import { Channels } from '../../../../../environments/channels';

@Component({
  selector: 'app-lista-fornecedor',
  templateUrl: './lista-fornecedor.component.html',
  styleUrls: ['./lista-fornecedor.component.css']
})
export class ListaFornecedorComponent implements OnInit {

  public data: any[];
  public cols: any[];
  public actions: any[] = [];
  public title: any;
  public selectedData: any;

  public channel = Channels.pages.cadastro.empresa.fornecedor;
  private _channelEmpresa = Channels.pages.cadastro.empresa.empresa;
  private _empresa: any;

  constructor(
    private router: Router,
    private fornecedorService: FornecedorService,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'Código', style: 'text-align: right;' },
      { field: 'descricao', header: 'Descrição.', style: 'text-align: left;' },
      { field: 'telFixo', header: 'Tel. Fixo', style: 'text-align: right;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: center;' },
    ];

    this._empresa = this.dataService.getData(this._channelEmpresa);
    this.title = this._empresa.nome;

    this.fornecedorService.findByEmpresaId(this._empresa.id, fornecedores => {
      this.data = fornecedores;
    });
  }

  public tableDoubleClick(event) {
    const navigateUrl = 'cadastro/empresa/prod/listaproduto';
    this.router.navigate([navigateUrl]);
  }

}
