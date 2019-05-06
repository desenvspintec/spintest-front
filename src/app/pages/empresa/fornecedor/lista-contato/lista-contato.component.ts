import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DataService } from 'src/app/components/services/data-service/data.service';

// Enviroments
import { Channels } from '../../../../../environments/channels';
import { FornecedorContatoService } from 'src/app/service/fornecedor_contato/fornecedor-contato.service';

@Component({
  selector: 'app-lista-contato',
  templateUrl: './lista-contato.component.html',
  styleUrls: ['./lista-contato.component.css']
})
export class ListaContatoComponent implements OnInit {

  public data: any[];
  public cols: any[];
  public actions: any[] = [];
  public title: any;
  public selectedData: any;

  public channel = Channels.pages.cadastro.empresa.contato;
  private _fornecedor: any;


  constructor(private router: Router,
    private fornecedorContatoService: FornecedorContatoService,
    private dataService: DataService) { }

  ngOnInit() {

    this.cols = [
      { field: 'nome', header: 'Nome', style: 'text-align: left;' },
      { field: 'email', header: 'Email', style: 'text-align: right;' },
      { field: 'telFixo', header: 'Telefone.', style: 'text-align: left;' },
      { field: 'telCel', header: 'Celular', style: 'text-align: right;' },
      { field: 'ramal', header: 'Ramal', style: 'text-align: center;' },
    ];

    this._fornecedor = this.dataService.getData(Channels.pages.cadastro.empresa.fornecedor);
    this.title = this._fornecedor.descricao;
    this.fornecedorContatoService.findByFornecedorId(this._fornecedor.id, contatos => {
      this.data = contatos;
    });
  }


  public tableDoubleClick(event) {
    /* const navigateUrl = 'cadastro/empresa/fornecfodler/contato/cadastrocontato';
     this.router.navigate([navigateUrl]);*/
  }
}
