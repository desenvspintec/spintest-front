import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/service/empresa/empresa.service';
import { Channels } from 'src/environments/channels';
import { DataService } from 'src/app/components/services/data-service/data.service';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.css']
})
export class ListaEmpresaComponent implements OnInit {
  data: any[];
  cols: any[];
  actions: any[];
  title: any = "Empresa";
  channel: any = Channels.pages.cadastro.empresa.empresa;

  constructor(private router: Router,
    private empresaService: EmpresaService,
    private dataService: DataService) { }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome', style: 'text-align: left;' }
    ];
    this.actions = [];
    this.empresaService.findAll((pessoas) => {
      this.data = pessoas;
    });
  }

  tableDoubleClick(event) {
    this.router.navigate(['cadastro/empresa/fornec/listafornecedor']);
  }

}
