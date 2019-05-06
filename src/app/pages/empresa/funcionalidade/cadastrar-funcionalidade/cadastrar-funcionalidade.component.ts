import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// services
import { DataService } from 'src/app/components/services/data-service/data.service';
import { FuncionalidadeService } from 'src/app/service/funcionalidade/funcionalidade.service';

// environments
import { Channels } from 'src/environments/channels';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastrar-funcionalidade',
  templateUrl: './cadastrar-funcionalidade.component.html',
  styleUrls: ['./cadastrar-funcionalidade.component.css']
})
export class CadastrarFuncionalidadeComponent implements OnInit {

  public form: FormGroup;

  private _funcionalidade: any;
  private _empresaChannel: string = Channels.pages.cadastro.empresa.empresa;
  private _produtoChannel: string = Channels.pages.cadastro.empresa.produto;
  private _funcionalidadeChannel: string = Channels.pages.cadastro.empresa.funcionalidade;

  constructor(
    private _messageService: MessageService,
    private _funcService: FuncionalidadeService,
    private _dataService: DataService,
    private _formBuilder: FormBuilder,
    private _router: Router) { }

  ngOnInit() {

    this._buildForm();

    this._funcionalidade = this._dataService.getData(this._funcionalidadeChannel);

    if (!this._funcionalidade) {
      this.form.reset();
      return;
    }

    if (this._funcionalidade.situacao) {
      this._funcionalidade.situacao = this._funcionalidade.situacao === "ATIVO";
    }

    this.form.setValue(this._funcionalidade);
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      empresaId: [''],
      produtoId: [''],
      situacao: [''],
      observacao: [''],
      createdAt: [''],
      updatedAt: [''],
      userId: [''],
      updatedUserId: ['']
    });
  }

  public voltar(event) {
    const backUrl = 'cadastro/empresa/func/listafuncionalidade';
    this._router.navigate([backUrl]);
  }

  public salvar(): void {

    if (this.form.invalid) {
      return;
    }

    const func = this.form.getRawValue();;
    const empresa = this._dataService.getData(this._empresaChannel);
    const produto = this._dataService.getData(this._produtoChannel);

    func.empresaId = empresa.id;
    func.produtoId = produto.id;
    func.situacao = func.situacao ? 'ATIVO' : 'INATIVO';

    this._funcService.save(func, funcionalidade => {

      funcionalidade.situacao = funcionalidade.situacao === "ATIVO";
      this.form.setValue(funcionalidade);

      this._messageService.add({
        severity: 'success',
        detail: 'Funcionalidade salva com sucesso!'
      });
    });
  }
}
