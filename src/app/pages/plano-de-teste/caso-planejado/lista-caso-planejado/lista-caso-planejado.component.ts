import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-caso-planejado',
  templateUrl: './lista-caso-planejado.component.html',
  styleUrls: ['./lista-caso-planejado.component.css']
})
export class ListaCasoPlanejadoComponent implements OnInit {

  public form: FormGroup;

  public subtitle = [
    { desc: 'Data inicial: 11/05/2019' },
    { desc: 'Data final: 12/05/2019' },
    { desc: 'Executor: Fulano 1' }];

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
    });
  }

  public voltar(event) {
    const navigateUrl = 'planejamento/planodeteste/base/listabaseline';
    this._router.navigate([navigateUrl]);
  }

}
