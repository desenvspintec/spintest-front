import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
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

  public salvar() {

  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      planoTesteId: [''],
      empresaId: [''],
      userExecutorId: [''],
      updatedUserId: [''],
      userId: [''],
      situacao: [''],
      dataInicio: ['', [Validators.required, validaData]],
      dataFinal: ['', [Validators.required, validaData]],
      horaInicio: ['', Validators.required],
      horaFinal: ['', Validators.required],
      updatedAt: [''],
      createdAt: [''],
    });
  }

  public voltar(event): void {
    const navigateUrl = 'planejamento/planodeteste/base/listabaseline';
    this._router.navigate([navigateUrl]);
  }


}

function validaData(control: AbstractControl): object {

  if (!control.parent || !control) {
    return;
  }

  const dataInicio = control.parent.get('dataInicio');
  const dataFinal = control.parent.get('dataFinal');

  if (dataInicio && dataFinal) {
    if ((dataFinal.value < dataInicio.value) ||
      dataInicio.value > dataFinal.value) {
      return {
        invalid: true
      };
    }
  }


}

