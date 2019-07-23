import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// services
import { EmpresaService } from 'src/app/service/empresa/empresa.service';

// channels
import { Channels } from 'src/environments/channels';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.css']
})
export class ListaEmpresaComponent implements OnInit, OnDestroy {

  public data: any[];
  public cols: any[];
  public actions: any[] = [];
  public title: any = "Empresa";

  public channel: any = Channels.pages.cadastro.empresa.empresa;

  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private router: Router,
    private empresaService: EmpresaService,
  ) { }

  ngOnInit() {

    this.cols = [
      { field: 'nome', header: 'Nome', style: 'text-align: left;' }
    ];

    this.empresaService.findAll()
      .subscribe(empresas => this.data = empresas);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  tableDoubleClick(event) {
    this.router.navigate(['cadastro/empresa/fornecfodler/fornec/listafornecedor']);
  }

}
