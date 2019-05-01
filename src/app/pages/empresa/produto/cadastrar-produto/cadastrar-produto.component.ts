import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { Channels } from 'src/environments/channels';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private produtoService: ProdutoService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      empresaId: [''],
      fornecedorId: [''],
      userId: [''],
      situacao: [''],
      deleted: [''],
      createdAt: [''],
      updatedAt: ['']
    });

    let produto = this.dataService.getData(Channels.pages.cadastro.empresa.produto);
    if (produto) {
      if (produto.situacao) {
        produto.situacao = produto.situacao === "ATIVO";
      }
      this.form.setValue(produto);
    } else {
      this.form.reset();
    }
  }

  voltar(event) {
    this.router.navigate(['cadastro/empresa/prod/listaproduto']);
  }

  salvar() {
    if (this.form.invalid)
    return;
  let fornec = this.form.value;
  let empresa = this.dataService.getData(Channels.pages.cadastro.empresa.empresa);
  fornec.empresaId = empresa.id;
  fornec.situacao = fornec.situacao ? 'ATIVO' : 'INATIVO';
  fornec.cidadeId = fornec.cidadeId.id;
  this.produtoService.save(fornec, fornecedor => {
    fornecedor.situacao = fornecedor.situacao === "ATIVO";
    this.form.setValue(fornecedor);
    this.messageService.add({ severity: 'success', detail: 'Fornecedor salvo com sucesso!' });
  });
  }

}
