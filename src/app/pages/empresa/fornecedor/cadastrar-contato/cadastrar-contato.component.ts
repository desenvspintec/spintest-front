import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// services
import { FornecedorContatoService } from 'src/app/service/fornecedor_contato/fornecedor-contato.service';
import { DataService } from 'src/app/components/services/data-service/data.service';

// channels
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-cadastrar-contato',
  templateUrl: './cadastrar-contato.component.html',
  styleUrls: ['./cadastrar-contato.component.css']
})
export class CadastrarContatoComponent implements OnInit, OnDestroy {

  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _router: Router,
    private _dataService: DataService,
    private _fornecedorContatoService: FornecedorContatoService) { }

  ngOnInit() {
    this._buildForm();

    const contato = this._dataService.getData(Channels.pages.cadastro.empresa.contato);

    if (!contato) {
      this.form.reset();
      return;
    } else {
      this.form.setValue(contato);
    }
  }

  ngOnDestroy(): void {

  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      email: [''],
      telFixo: [''],
      telCel: [''],
      ramal: [''],
      cargo: [''],
      fornecedorId: [''],
      createdAt: [''],
      updatedAt: [''],
      userId: [''],
      updatedUserId: ['']
    });
  }

  salvar() {
    if (this.form.invalid) {
      return;
    }
    let contato = this.form.value;
    contato.fornecedorId = this._dataService.getData(Channels.pages.cadastro.empresa.fornecedor).id;
    this._fornecedorContatoService.save(contato, contato => {
      this.form.setValue(contato);
    });

  }

  voltar(event) {
    const backUrl = 'cadastro/empresa/fornecfodler/contato/listacontato';
    this._router.navigate([backUrl]);
  }
}
