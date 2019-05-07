import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { Channels } from 'src/environments/channels';
import { forkJoin, Observable, Subject } from 'rxjs';
import { FornecedorService } from 'src/app/service/fornecedor/fornecedor.service';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { first, map, takeUntil } from 'rxjs/operators';
import { EmpresaService } from 'src/app/service/empresa/empresa.service';
import { ProjetoTesteService } from 'src/app/service/projeto-teste/projeto-teste.service';

@Component({
  selector: 'app-cadastrar-plano-de-teste',
  templateUrl: './cadastrar-plano-de-teste.component.html',
  styleUrls: ['./cadastrar-plano-de-teste.component.css']
})
export class CadastrarPlanoDeTesteComponent implements OnInit {

  public form: FormGroup;
  public empresas: any[] = [];
  public groupedProdutos: any[] = [];
  public projetos: any[] = [];

  private _channelPlanoTeste: string = Channels.pages.planejamento.plano_de_teste.plano_de_teste;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _empresaService: EmpresaService,
    private _messageService: MessageService,
    private _fornecedorService: FornecedorService,
    private _projetoTesteService: ProjetoTesteService,
    private _produtoService: ProdutoService,
    private _dataService: DataService) { }

  ngOnInit() {
    this._buildForm();
    this._getEmpresas();

    const planoTeste = this._dataService.getData(this._channelPlanoTeste);

    if (planoTeste) {
      this._updateFormValues(planoTeste);
    };

    this.form.get('empresaId').valueChanges.pipe(
      takeUntil(this._unsubscribeAll))
      .subscribe(empresaId => {
        this.form.get('produtoId').reset();
        if (empresaId) {
          const formValue = this.form.getRawValue();
          this._updateFormValues(formValue);
        }
      });

    this._onProdutoChange();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  private _onProdutoChange(): void {
    this.form.get('produtoId').valueChanges.pipe(
      takeUntil(this._unsubscribeAll))
      .subscribe(produtoId => {
        const empresaId = this.form.get('empresaId').value;
        if (produtoId && empresaId) {
          this._projetoTesteService
            .findByEmpresaProdutoId(empresaId, produtoId)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(projetos => this.projetos =
              projetos.map(projeto => {
                console.log('projeto', projeto);
                return {
                  label: projeto.descricao,
                  value: projeto.id
                };
              }));
        }
      });
  }

  private _updateFormValues(data: any): void {
    this._getProdutosEmpresaFornecedor(data.empresaId)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(groupedProdutos => {
        this.groupedProdutos = groupedProdutos;
        this.form.setValue(data, { emitEvent: false });
      });
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      produtoId: ['', Validators.required],
      projetoTesteId: ['', Validators.required],
      descricao: ['', Validators.required],
      empresaId: ['', Validators.required],
      userId: [''],
      situacao: [''],
      dataInicio: [''],
      dataFinal: [''],
      observacao: [''],
      versaoProduto: [''],
      updatedAt: [''],
      createdAt: [''],
    });
  }

  private _getEmpresas(): void {
    this._empresaService.findAll()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(empresas => {
        this.empresas = empresas.map(empresa => {
          return {
            label: empresa.nome,
            value: empresa.id
          };
        });
      });
  }

  /**
  * @description Método para retornar os fornecedores 
  * da empresa e os produtos de cada fornecedor
  * @param empresaId 
  */
  private _getProdutosEmpresaFornecedor(empresaId: number): Observable<any[]> {
    return forkJoin([
      this._fornecedorService.findByEmpresaId(empresaId),
      this._produtoService.findByEmpresa(empresaId),
      // Aguardo pelo retorno dos fonecedores e produtos
    ]).pipe(first(), map(([fornecedores, produtos]) => {
      const groupedProdutos = []

      // Percorre os fornecedores para ver quais produtos
      // pertencem a cada fornecedor
      fornecedores.forEach(fornecedor => {

        // Filtra os produtos do fornecedor e faz o map
        // para retornar um objeto transformado para
        // exibir no componente de seleção de produtos
        const items = produtos
          .filter(v => v.fornecedorId = fornecedor.id)
          .map(produto => {
            return {
              label: produto.descricao,
              value: produto.id
            };
          });

        // Adiciona o grupo de produtos com fornecedor
        // e seus respectivos produtos
        groupedProdutos.push({
          label: fornecedor.descricao,
          items: items
        });

      });

      return groupedProdutos;
    }));
  }

  public voltar(event) {
    const navigateUrl = 'planejamento/planodeteste/plteste/listaplanodeteste';
    this._router.navigate([navigateUrl]);
  }

  salvar() {

    if (this.form.invalid) {
      return;
    }

    /*  this.empresaService.save(this.form.value, empresa => {
        this.form.setValue(empresa);
        this.messageService.add({ severity: 'success', detail: 'Empresa salva com sucesso!' });
      });*/
  }

}
