import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//rxjs
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cadastrar-baseline',
  templateUrl: './cadastrar-baseline.component.html',
  styleUrls: ['./cadastrar-baseline.component.css']
})
export class CadastrarBaselineComponent implements OnInit, OnDestroy {

  public form: FormGroup;

  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this._buildForm();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      planoTesteId: ['', Validators.required],
      empresaId: ['', Validators.required],
      userExecutorId: [''],
      updatedUserId: [''],
      userId: [''],
      situacao: [''],
      dataInicio: [''],
      dataFinal: [''],
      horaInicio: [''],
      horaFinal: [''],
      updatedAt: [''],
      createdAt: [''],
    });
  }

  public voltar(event): void {
    const navigateUrl = 'planejamento/planodeteste/base/listabaseline';
    this._router.navigate([navigateUrl]);
  }


}
