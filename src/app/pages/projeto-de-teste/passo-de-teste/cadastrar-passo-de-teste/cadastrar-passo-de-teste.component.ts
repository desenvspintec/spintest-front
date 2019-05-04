import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// services
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { PassoTesteService } from 'src/app/service/passo-teste/passo-teste.service';

// environments
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-cadastrar-passo-de-teste',
  templateUrl: './cadastrar-passo-de-teste.component.html',
  styleUrls: ['./cadastrar-passo-de-teste.component.css']
})
export class CadastrarPassoDeTesteComponent implements OnInit {

  public form: FormGroup;

  private _channelEmpresa: string = Channels.pages.cadastro.empresa.empresa;
  private _channelCasoTeste: string = Channels.pages.cadastro.projeto_de_teste.caso_de_teste;
  private _channelPassoTeste: string = Channels.pages.cadastro.projeto_de_teste.passo_de_teste;

  constructor(
    private _router: Router,
    private _messageService: MessageService,
    private _passoTesteService: PassoTesteService,
    private _formBuilder: FormBuilder,
    private _dataService: DataService
  ) { }

  ngOnInit() {

    this._buildForm();

    const passoTeste = this._dataService.getData(this._channelPassoTeste);

    if (!passoTeste) {
      this.form.reset();
      return;
    }

    if (passoTeste.situacao) {
      passoTeste.situacao = passoTeste.situacao === "ATIVO";
    }

    this.form.setValue(passoTeste);
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      acao: ['', Validators.required],
      resultado: [''],
      empresaId: [''],
      casoTesteId: [''],
      tipoTeste: [''],
      userId: [''],
      situacao: [''],
      sequencia: ['']
    });
  }

  private _getDataWithIdsRelation(): any {
    const formValue = this.form.getRawValue();
    const empresa = this._dataService.getData(this._channelEmpresa);
    const casoTeste = this._dataService.getData(this._channelCasoTeste);
    formValue.empresaId = empresa.id;
    formValue.casoTesteId = casoTeste.id;
    return formValue;
  }

  public voltar(event) {
    const backUrl = 'projetodeteste/projeto/passo/listapasso';
    this._router.navigate([backUrl]);
  }

  public salvar(): void {

    if (this.form.invalid) {
      return;
    }

    const passoTeste = this._getDataWithIdsRelation();
    passoTeste.situacao = passoTeste.situacao ? 'ATIVO' : 'INATIVO';

    this._passoTesteService.save(passoTeste, passoTeste => {
      passoTeste.situacao = passoTeste.situacao === "ATIVO";
      this.form.setValue(passoTeste);
      this._messageService.add({
        severity: 'success',
        detail: 'Passo de teste salvo com sucesso!'
      });
    });
  }

}
