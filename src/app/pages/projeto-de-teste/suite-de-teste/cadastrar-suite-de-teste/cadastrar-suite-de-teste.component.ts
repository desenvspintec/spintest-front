import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// services
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { SuiteTesteService } from 'src/app/service/suite-teste/suite-teste.service';

// environments
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-cadastrar-suite-de-teste',
  templateUrl: './cadastrar-suite-de-teste.component.html',
  styleUrls: ['./cadastrar-suite-de-teste.component.css']
})
export class CadastrarSuiteDeTesteComponent implements OnInit {

  public form: FormGroup;

  private _channelProjeto = Channels.pages.cadastro.projeto_de_teste.projeto_de_teste;
  private _channelSuiteTeste = Channels.pages.cadastro.projeto_de_teste.suite_de_teste;

  constructor(
    private _router: Router,
    private _messageService: MessageService,
    private _suiteTesteService: SuiteTesteService,
    private _dataService: DataService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this._buildForm();

    const suite = this._dataService.getData(this._channelSuiteTeste);

    if (!suite) {
      this.form.reset();
      return;
    }

    this.form.setValue(suite);
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      objetivo: [''],
      empresaId: [''],
      projetoTesteId: [''],
      updatedUserId: [''],
      userId: [''],
      situacao: [''],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  private _getDataWithIdsRelation(): any {
    const formValue = this.form.getRawValue();
    const projeto = this._dataService.getData(this._channelProjeto);
    formValue.projetoTesteId = projeto.id;
    formValue.empresaId = projeto.empresaId;
    return formValue;
  }

  public salvar(): void {
    
    if (this.form.invalid) {
      return;
    }

    const suiteTeste = this._getDataWithIdsRelation();
    suiteTeste.situacao = suiteTeste.situacao ? 'ATIVO' : 'INATIVO';

    this._suiteTesteService.save(suiteTeste, suiteTeste => {
      this.form.setValue(suiteTeste);

      this._messageService.add({
        severity: 'success',
        detail: 'Suite de teste salva com sucesso!'
      });
    });
  }

  public voltar(event) {
    const urlBack = 'projetodeteste/projeto/suite/listasuite';
    this._router.navigate([urlBack]);
  }

}
