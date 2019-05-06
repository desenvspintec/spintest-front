import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// services
import { MessageService } from 'primeng/api';
import { FornecedorService } from 'src/app/service/fornecedor/fornecedor.service';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { CidadeService } from 'src/app/service/cidade/cidade.service';

// environments
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-cadastrar-fornecedor',
  templateUrl: './cadastrar-fornecedor.component.html',
  styleUrls: ['./cadastrar-fornecedor.component.css']
})
export class CadastrarFornecedorComponent implements OnInit {

  public formFornecedor: FormGroup;
  public cidades: any[];
  public cidadesAutoComple: any[];
  public dialogTitle: string;
  public contatoSelecionado = {email: '', telCel: '', telFixo: '', ramal: ''};
  public contatoDialogVisible: boolean = false;

  public cols: any[] = [];
  public actions: any[] = [];

  private _channelEmpresa: string = Channels.pages.cadastro.empresa.empresa;
  private _channelFornecedor: string = Channels.pages.cadastro.empresa.fornecedor;

  constructor(
    private _fornecedorService: FornecedorService,
    private _cidadeService: CidadeService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _messageService: MessageService,
    private _dataService: DataService) { }

  ngOnInit() {

    this.cols = [
      { field: 'cargo', header: 'Cargo', style: 'text-align: left;' },
      { field: 'nome', header: 'Nome', style: 'text-align: left;' },
      { field: 'email', header: 'Email', style: 'text-align: left;' },
      { field: 'celular', header: 'Celular', style: 'text-align: left;' },
      { field: 'telefone', header: 'Telefone', style: 'text-align: left;' },
      { field: 'ramal', header: 'Ramal', style: 'text-align: left;' },
    ];

    this._buildForms();

    const fornecedor = this._dataService.getData(this._channelFornecedor);

    if (!fornecedor) {
      this.formFornecedor.reset();
      return;
    }

    if (fornecedor.situacao) {
      fornecedor.situacao = fornecedor.situacao === "ATIVO";
    }

    this.formFornecedor.setValue(fornecedor);

  }

  private _buildForms(): void {

    this.formFornecedor = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      telFixo: [''],
      telCel: [''],
      endereco: [''],
      complemento: [''],
      enderecoNumero: [''],
      cep: [''],
      bairro: [''],
      situacao: [''],
      cidadeId: [''],
      empresaId: [''],
      createdAt: [''],
      updatedAt: [''],
      userId: [''],
      updatedUserId: ['']
    });
  }

  private _filtrarCidades(event): void {
    this.cidadesAutoComple = this.cidades.filter(cidade => {
      return cidade.nome.toUpperCase().indexOf(event.query.toUpperCase()) > -1
        || ((cidade.estadoId) && ((cidade.estadoId.nome.toUpperCase().indexOf(event.query.toUpperCase()) > -1
          || cidade.estadoId.uf.toUpperCase().indexOf(event.query.toUpperCase()) > -1)));
    });
  }

  private _getDataWithIdsRelation(): any {

    const formValue = this.formFornecedor.getRawValue();
    const empresa = this._dataService.getData(this._channelEmpresa);

    // Verificar porque em algum momento
    // a empresa não está setada no canal
    formValue.empresaId = empresa ? empresa.id : null;

    return formValue;
  }

  public voltar(event) {
    const backUrl = 'cadastro/empresa/fornecfodler/fornec/listafornecedor';
    this._router.navigate([backUrl]);
  }

  public localizarCidades(event): void {
    if (!this.cidades) {
      this._cidadeService.findAll(cidades => {
        this.cidades = cidades;
        this._filtrarCidades(event);
      });
    } else {
      this._filtrarCidades(event);
    }
  }

  public salvar() {

    if (this.formFornecedor.invalid) {
      return;
    }

    const fornecedor = this._getDataWithIdsRelation();
    fornecedor.situacao = fornecedor.situacao ? 'ATIVO' : 'INATIVO';
    fornecedor.cidadeId = fornecedor.cidadeId ? fornecedor.cidadeId.id : null;

    this._fornecedorService.save(fornecedor, fornecedor => {

      fornecedor.situacao = fornecedor.situacao === "ATIVO";
      this.formFornecedor.setValue(fornecedor);

      this._messageService.add({
        severity: 'success',
        detail: 'Fornecedor salvo com sucesso!'
      });

    });
  }

}