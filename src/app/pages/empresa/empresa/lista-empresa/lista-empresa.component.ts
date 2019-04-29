import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/service/empresa/empresa.service';
import { PubSubService } from 'angular7-pubsub';
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.css']
})
export class ListaEmpresaComponent implements OnInit {
  data: any[];
  cols: any[];
  actions: any[];
  constructor(private router: Router,
    private empresaService: EmpresaService,
    private pubsub: PubSubService) { }
 
  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome', style: 'text-align: left;'}
    ];
    this.actions = [
      {
        label: 'Alterar',
        icon: 'pi pi-pencil',
        command: this.alterar.bind(this)
      }
    ]
    this.empresaService.findAll((pessoas) =>{
      this.data = pessoas;
    });

  }

  doubleClick(data){
    
  }

  onRowSelect(data){ 
    this.pubsub.$pub(Channels.pages.cadastro.empresa.fornecedor.lista_fornecedor.set_empresa,data);
  }

  alterar(registroSelecionado) {

    this.router.navigate(['cadastro/empresa/emp/cadastroempresa']);
  }

}
