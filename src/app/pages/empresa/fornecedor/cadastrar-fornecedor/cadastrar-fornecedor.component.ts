import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { Channels } from 'src/environments/channels';
import { FornecedorService } from 'src/app/service/fornecedor/fornecedor.service';
import { CidadeService } from 'src/app/service/cidade/cidade.service';


@Component({
  selector: 'app-cadastrar-fornecedor',
  templateUrl: './cadastrar-fornecedor.component.html',
  styleUrls: ['./cadastrar-fornecedor.component.css']
})
export class CadastrarFornecedorComponent implements OnInit {

  form: FormGroup;
  cidades: any[];
  cidadesAutoComple: any[];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private fornecedorService: FornecedorService,
    private messageService: MessageService,
    private dataService: DataService,
    private cidadeService: CidadeService) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
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
      userId: [''],
      cidadeId: [''],
      empresaId: [''],
      createdAt: [''],
      updatedAt: ['']

    });

    let fornecedor = this.dataService.getData(Channels.pages.cadastro.empresa.fornecedor);
    if (fornecedor) {
      if (fornecedor.situacao) {
        fornecedor.situacao = fornecedor.situacao === "ATIVO";
      }
      this.form.setValue(fornecedor);
    } else {
      this.form.reset();
    }

  }

  voltar(event) {
    this.router.navigate(['cadastro/empresa/fornec/listafornecedor']);
  }

  localizarCidades(event) {
    if (!this.cidades) {
      this.cidadeService.findAll(cidades => {
        this.cidades = cidades;
        this.filtrarCidades(event);
      });
    } else {
      this.filtrarCidades(event);
    }

  }

  filtrarCidades(event){
    this.cidadesAutoComple = this.cidades.filter(cidade => {
      return cidade.nome.toUpperCase().indexOf(event.query.toUpperCase()) > -1 
      || ((cidade.estadoId) && ((cidade.estadoId.nome.toUpperCase().indexOf(event.query.toUpperCase()) > -1 
      || cidade.estadoId.uf.toUpperCase().indexOf(event.query.toUpperCase()) > -1)));
    });
  }

  salvar() {
    if (this.form.invalid)
      return;
    let fornec = this.form.value;
    let empresa = this.dataService.getData(Channels.pages.cadastro.empresa.empresa);
    fornec.empresaId = empresa.id;
    fornec.situacao = fornec.situacao ? 'ATIVO' : 'INATIVO';
    fornec.cidadeId = fornec.cidadeId.id;
    this.fornecedorService.save(fornec, fornecedor => {
      fornecedor.situacao = fornecedor.situacao === "ATIVO";
      this.form.setValue(fornecedor);
      this.messageService.add({ severity: 'success', detail: 'Fornecedor salvo com sucesso!' });
    });
  }

}
