import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/service/empresa/empresa.service';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private empresaService: EmpresaService,
    private messageService: MessageService,
    private dataService: DataService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      createdAt: [''],
      updatedAt: ['']
    });

    let empresa = this.dataService.getData(Channels.pages.cadastro.empresa.empresa);
    if (empresa) {
      this.form.setValue(empresa);
    } else {
      this.form.reset();
    }

  }

  voltar(event) {
    this.router.navigate(['cadastro/empresa/emp/listaempresa']);
  }

  salvar() {
    if (this.form.invalid)
      return;

    this.empresaService.save(this.form.value, empresa => {
      this.form.setValue(empresa);
      this.messageService.add({ severity: 'success', detail: 'Empresa salva com sucesso!' });
    });
  }

}
