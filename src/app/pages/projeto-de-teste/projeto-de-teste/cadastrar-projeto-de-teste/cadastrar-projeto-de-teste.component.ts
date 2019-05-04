import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// service
import { MessageService } from 'primeng/api';
import { ProjetoTesteService } from 'src/app/service/projeto-teste/projeto-teste.service';
import { DataService } from 'src/app/components/services/data-service/data.service';

// environments
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-cadastrar-projeto-de-teste',
  templateUrl: './cadastrar-projeto-de-teste.component.html',
  styleUrls: ['./cadastrar-projeto-de-teste.component.css']
})
export class CadastrarProjetoDeTesteComponent implements OnInit {

  public produtos: any[] = [];

  public form: FormGroup;

  private _channelProjeto = Channels.pages.cadastro.projeto_de_teste.projeto_de_teste;

  constructor(
    private _router: Router,
    private _messageService: MessageService,
    private _projetoTesteService: ProjetoTesteService,
    private _dataService: DataService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this._buildForm();

    const projeto = this._dataService.getData(this._channelProjeto);

    if (!projeto) {
      this.form.reset();
      return;
    }

    this.form.setValue(projeto);

  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      produtoId: [''],
      empresaId: [''],
      userId: [''],
      situacao: [''],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  public salvar(): void {
    this._projetoTesteService.save(this.form.value, projeto => {
      this.form.setValue(projeto);

      this._messageService.add({
        severity: 'success',
        detail: 'Projeto de teste salvo com sucesso!'
      });
    });
  }

  public voltar(event) {
    const urlBack = 'projetodeteste/projeto/pro/listaprojeto';
    this._router.navigate([urlBack]);
  }

}
