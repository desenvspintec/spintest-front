import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DataService } from 'src/app/components/services/data-service/data.service';
import { FornecedorContatoService } from 'src/app/service/fornecedor_contato/fornecedor-contato.service';

// Enviroments
import { Channels } from '../../../../../environments/channels';

// rxjs
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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

  private _channelFornecedor = Channels.pages.cadastro.empresa.fornecedor;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _router: Router,
    private _fornecedorContatoService: FornecedorContatoService,
    private _dataService: DataService) { }

  ngOnInit() {

    this.cols = [
      { field: 'nome', header: 'Nome', style: 'text-align: left;' },
      { field: 'email', header: 'Email', style: 'text-align: right;' },
      { field: 'telFixo', header: 'Telefone.', style: 'text-align: left;' },
      { field: 'telCel', header: 'Celular', style: 'text-align: right;' },
      { field: 'ramal', header: 'Ramal', style: 'text-align: center;' },
    ];

    const fornecedor = this._dataService.getData(this._channelFornecedor);
    this.title = fornecedor.descricao;

    this._fornecedorContatoService
      .findByFornecedorId(fornecedor.id)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(contatos => this.data = contatos);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  public tableDoubleClick(event) {
    const navigateUrl = 'cadastro/empresa/fornecfodler/contato/cadastrocontato';
    this._router.navigate([navigateUrl])
  }
}
