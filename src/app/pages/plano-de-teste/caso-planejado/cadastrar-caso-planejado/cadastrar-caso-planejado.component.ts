import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-cadastrar-caso-planejado',
  templateUrl: './cadastrar-caso-planejado.component.html',
  styleUrls: ['./cadastrar-caso-planejado.component.css']
})
export class CadastrarCasoPlanejadoComponent implements OnInit {

  public filesTree4: TreeNode[];
  public selectedFiles2: TreeNode[];
  public form: FormGroup;

  public subtitle = [
    { desc: 'Data inicial: 11/05/2019' },
    { desc: 'Data final: 12/05/2019' },
    { desc: 'Executor: Fulano 1' }];

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
    });

    this.filesTree4 = [];
    const list = [1, 2, 3, 4];
    const item = {
      label: "Storage",
      data: "Storage Folder",
      expandedIcon: "fa fa-folder-open",
      collapsedIcon: "fa fa-folder",
      children: [
        {
          label: "Storage",
          data: "Storage Folder",
          expandedIcon: "fa fa-folder-open",
          collapsedIcon: "fa fa-folder"
        },
        {
          label: "Storage",
          data: "Storage Folder",
          expandedIcon: "fa fa-folder-open",
          collapsedIcon: "fa fa-folder"
        },
        {
          label: "Storage",
          data: "Storage Folder",
          expandedIcon: "fa fa-folder-open",
          collapsedIcon: "fa fa-folder"
        },
        {
          label: "Storage",
          data: "Storage Folder",
          expandedIcon: "fa fa-folder-open",
          collapsedIcon: "fa fa-folder"
        },
      ]
    };
    for (let i of list) {
      this.filesTree4.push(item);
    }


  }

  public voltar(event) {
    const navigateUrl = 'planejamento/planodeteste/base/listabaseline';
    this._router.navigate([navigateUrl]);
  }

  public salvar() {

  }
}
