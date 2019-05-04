import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { EmpresaService } from 'src/app/service/empresa/empresa.service';

// channels
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.css']
})
export class ListaEmpresaComponent implements OnInit {

  public data: any[];
  public cols: any[];
  public actions: any[] = [];
  public title: any = "Empresa";

  public channel: any = Channels.pages.cadastro.empresa.empresa;

  constructor(
    private router: Router,
    private empresaService: EmpresaService,
  ) { }

  ngOnInit() {

    this.cols = [
      { field: 'nome', header: 'Nome', style: 'text-align: left;' }
    ];

    this.empresaService.findAll((empresas) => {
      this.data = empresas;
    });
  }

  tableDoubleClick(event) {
    this.router.navigate(['cadastro/empresa/fornec/listafornecedor']);
  }

}
