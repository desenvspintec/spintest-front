import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-funcionalidade',
  templateUrl: './cadastrar-funcionalidade.component.html',
  styleUrls: ['./cadastrar-funcionalidade.component.css']
})
export class CadastrarFuncionalidadeComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],

    });
  }

  voltar(event) {
    this.router.navigate(['cadastro/empresa/func/listafuncionalidade']);
  }

  salvar() {

  }

}
