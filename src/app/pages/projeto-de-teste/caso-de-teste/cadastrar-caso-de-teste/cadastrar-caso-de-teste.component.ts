import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// environments
import { Channels } from 'src/environments/channels';

// services
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { CasoTesteService } from 'src/app/service/caso-teste/caso-teste.service';

@Component({
  selector: 'app-cadastrar-caso-de-teste',
  templateUrl: './cadastrar-caso-de-teste.component.html',
  styleUrls: ['./cadastrar-caso-de-teste.component.css']
})
export class CadastrarCasoDeTesteComponent implements OnInit {

  public form: FormGroup;

  private _channelCasoTeste = Channels.pages.cadastro.projeto_de_teste.caso_de_teste;
  private _channelSuiteTeste = Channels.pages.cadastro.projeto_de_teste.suite_de_teste;

  constructor(
    private _router: Router,
    private _messageService: MessageService,
    private _casoTesteService: CasoTesteService,
    private _formBuilder: FormBuilder,
    private _dataService: DataService
  ) { }

  ngOnInit() {

    this._buildForm();

    const casoTeste = this._dataService.getData(this._channelCasoTeste);

    if (!casoTeste) {
      this.form.reset();
      return;
    }

    this.form.setValue(casoTeste);
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      condicoes: ['', Validators.required],
      objetivo: ['', Validators.required],
      tempoExecucao: ['', Validators.required],
      tipoTeste: [''],
      empresaId: [''],
      updatedUserId: [''],
      suiteTesteId: [''],
      userId: [''],
      situacao: [''],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  private _getDataWithIdsRelation(): any {
    const formValue = this.form.getRawValue();
    const suiteTeste = this._dataService.getData(this._channelSuiteTeste);
    formValue.empresaId = suiteTeste.empresaId;
    formValue.suiteTesteId = suiteTeste.id;
    return formValue;
  }

  public salvar(): void {

    if (this.form.invalid) {
      return;
    }

    const suiteTeste = this._getDataWithIdsRelation();
    suiteTeste.situacao = suiteTeste.situacao ? 'ATIVO' : 'INATIVO';
    suiteTeste.tipoTeste = 'MANUAL';

    this._casoTesteService.save(suiteTeste, suite => {
      this.form.setValue(suite);

      this._messageService.add({
        severity: 'success',
        detail: 'Suite de teste salva com sucesso!'
      });
    });
  }

  public voltar(event) {
    const urlBack = 'projetodeteste/projeto/caso/listacaso';
    this._router.navigate([urlBack]);
  }

}
