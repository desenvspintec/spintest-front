import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// service
import { MessageService } from 'primeng/api';
import { ProjetoTesteService } from 'src/app/service/projeto-teste/projeto-teste.service';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { FornecedorService } from 'src/app/service/fornecedor/fornecedor.service';
import { EmpresaService } from 'src/app/service/empresa/empresa.service';

// environments
import { Channels } from 'src/environments/channels';

// rxjs
import { Subject, forkJoin, Observable } from 'rxjs';
import { takeUntil, map, first } from 'rxjs/operators';

@Component({
  selector: 'app-cadastrar-projeto-de-teste',
  templateUrl: './cadastrar-projeto-de-teste.component.html',
  styleUrls: ['./cadastrar-projeto-de-teste.component.css']
})
export class CadastrarProjetoDeTesteComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public empresas: any[] = [];
  public groupedProdutos: any[] = [];

  private _channelProjeto = Channels.pages.cadastro.projeto_de_teste.projeto_de_teste;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _router: Router,
    private _messageService: MessageService,
    private _projetoTesteService: ProjetoTesteService,
    private _empresaService: EmpresaService,
    private _produtosService: ProdutoService,
    private _fornecedorService: FornecedorService,
    private _dataService: DataService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this._buildForm();
    this._getEmpresas();

    const projeto = this._dataService.getData(this._channelProjeto);

    if (projeto) {
      this._updateFormValues(projeto);
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
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  private _updateFormValues(data: any): void {
    this._getProdutosEmpresaFornecedor(data.empresaId)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(groupedProdutos => {
        this.groupedProdutos = groupedProdutos;
        this.form.setValue(data, { emitEvent: false });
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
      this._produtosService.findByEmpresa(empresaId),
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

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      produtoId: ['', Validators.required],
      empresaId: ['', Validators.required],
      userId: [''],
      situacao: [''],
      createdAt: [''],
      updatedUserId: [''],
      updatedAt: ['']
    });
  }

  public salvar(): void {

    const projeto = this.form.getRawValue();
    projeto.situacao = projeto.situacao ? 'ATIVO' : 'INATIVO';

    this._projetoTesteService.save(projeto, projeto => {
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
