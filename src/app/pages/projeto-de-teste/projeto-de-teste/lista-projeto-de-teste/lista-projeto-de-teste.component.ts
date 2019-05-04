import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// environments
import { Channels } from 'src/environments/channels';
import { ProjetoTesteService } from 'src/app/service/projeto-teste/projeto-teste.service';

@Component({
  selector: 'app-lista-projeto-de-teste',
  templateUrl: './lista-projeto-de-teste.component.html',
  styleUrls: ['./lista-projeto-de-teste.component.css']
})
export class ListaProjetoDeTesteComponent implements OnInit {

  public data: any[] = [];
  public cols: any[];
  public actions: any[] = [];
  public title: any = "Projeto";

  public channel: any = Channels.pages.cadastro.projeto_de_teste.projeto_de_teste;

  constructor(
    private _projetoTesteService: ProjetoTesteService,
    private _router: Router
  ) { }

  ngOnInit() {

    this.cols = [
      { field: 'codigo', header: 'Código', style: 'text-align: left;' },
      { field: 'descricao', header: 'Descrição', style: 'text-align: left;' },
      { field: 'produto', header: 'Produto', style: 'text-align: left;' },
      { field: 'situacao', header: 'Situação', style: 'text-align: left;' }
    ];

    this._projetoTesteService
      .findAll((projetos) => {
        this.data = projetos;
      });

  }

  public tableDoubleClick(event) {
    this._router.navigate(['projetodeteste/projeto/suite/listasuite']);
  }

}
