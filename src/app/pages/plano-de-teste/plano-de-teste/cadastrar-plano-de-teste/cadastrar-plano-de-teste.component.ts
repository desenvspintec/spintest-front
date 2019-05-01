import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/components/services/data-service/data.service';
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-cadastrar-plano-de-teste',
  templateUrl: './cadastrar-plano-de-teste.component.html',
  styleUrls: ['./cadastrar-plano-de-teste.component.css']
})
export class CadastrarPlanoDeTesteComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private dataService: DataService) { }

  ngOnInit() {
   this.form = this.formBuilder.group({

    })
/*
    let plano_de_teste = this.dataService.getData(Channels.pages.planejamento.plano_de_teste.plano_de_teste);
    if (plano_de_teste) {
      this.form.setValue(plano_de_teste);
    } else {
      this.form.reset();
    } */

  }

  voltar(event) {
    this.router.navigate(['planejamento/planodeteste/plteste/listaplanodeteste']);
  }

  salvar(event) {
    if (this.form.invalid)
      return;

  /*  this.empresaService.save(this.form.value, empresa => {
      this.form.setValue(empresa);
      this.messageService.add({ severity: 'success', detail: 'Empresa salva com sucesso!' });
    });*/
  }

}
