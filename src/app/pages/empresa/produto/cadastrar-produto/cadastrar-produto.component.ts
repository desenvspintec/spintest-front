import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// services
import { MessageService } from 'primeng/api';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { DataService } from 'src/app/components/services/data-service/data.service';

// environments
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  public form: FormGroup;

  private _channelProduto: string = Channels.pages.cadastro.empresa.produto;
  private _channelEmpresa: string = Channels.pages.cadastro.empresa.empresa;
  private _channelFornecedor: string = Channels.pages.cadastro.empresa.fornecedor;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _dataService: DataService,
    private _produtoService: ProdutoService,
    private _messageService: MessageService) { }

  ngOnInit() {

    this._buildForm();

    const produto = this._dataService.getData(this._channelProduto);

    if (!produto) {
      this.form.reset();
      return;
    }

    if (produto.situacao) {
      produto.situacao = produto.situacao === "ATIVO";
    }

    this.form.setValue(produto);
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      empresaId: [''],
      fornecedorId: [''],
      situacao: [''],
      deleted: [''],
      createdAt: [''],
      updatedAt: [''],
      userId: [''],
      updatedUserId: ['']
    });
  }

  private _getDataWithIdsRelation(): any {
    const formValue = this.form.getRawValue();
    const empresa = this._dataService.getData(this._channelEmpresa);
    const fornecedor = this._dataService.getData(this._channelFornecedor);
    formValue.empresaId = empresa.id;
    formValue.fornecedorId = fornecedor.id;
    return formValue;
  }

  public voltar(event): void {
    const backUrl = 'cadastro/empresa/prod/listaproduto';
    this._router.navigate([backUrl]);
  }

  public salvar(): void {

    if (this.form.invalid) {
      return;
    }

    const produto = this._getDataWithIdsRelation();
    produto.situacao = produto.situacao ? 'ATIVO' : 'INATIVO';

    this._produtoService.save(produto, produto => {

      produto.situacao = produto.situacao === "ATIVO";
      this.form.setValue(produto);

      this._messageService.add({
        severity: 'success',
        detail: 'Produto salvo com sucesso!'
      });

    });
  }

}
