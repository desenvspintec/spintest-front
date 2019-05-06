import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// services
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { EmpresaService } from 'src/app/service/empresa/empresa.service';

// environments
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {

  public form: FormGroup;

  private _channelEmpresa = Channels.pages.cadastro.empresa.empresa;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _empresaService: EmpresaService,
    private _messageService: MessageService,
    private _dataService: DataService) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      createdAt: [''],
      updatedAt: [''],
      userId: [''],
      updatedUserId: ['']
    });

    const empresa = this._dataService.getData(this._channelEmpresa);

    if (!empresa) {
      this.form.reset();
      return;
    }

    this.form.setValue(empresa);

  }

  public salvar() {

    if (this.form.invalid) {
      return;
    }

    this._empresaService.save(this.form.value, empresa => {
      this.form.setValue(empresa);

      this._messageService.add({
        severity: 'success',
        detail: 'Empresa salva com sucesso!'
      });

    });
  }

  public voltar(event) {
    const urlBack = 'cadastro/empresa/emp/listaempresa';
    this._router.navigate([urlBack]);
  }

}
