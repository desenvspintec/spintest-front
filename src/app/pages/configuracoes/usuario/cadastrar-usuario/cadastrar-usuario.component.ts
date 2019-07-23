import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit, OnDestroy {

  public tiposAcesso: any[] = [];
  public form: FormGroup;

  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this._buildForm();

    this.tiposAcesso.push({
      label: 'Administrador',
      value: 'admin'
    });

    this.tiposAcesso.push({
      label: 'Normal',
      value: 'normal'
    });

    this.form.valueChanges
      .subscribe(() => {
        this._defineValidators();
      })
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  private _defineValidators(): void {
    const passwordValidator = [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9]).{8,}')];
    const passwordConfirmValidator = [Validators.required, confirmPassword];

    const password = this.form.get('password');
    const passwordConfirm = this.form.get('passwordConfirm');

    password.setValidators(passwordValidator);
    passwordConfirm.setValidators(passwordConfirmValidator);

    if (this.form.get('id').value) {

      password.clearValidators();
      passwordConfirm.clearValidators();

      if (password.value) {
        password.setValidators(passwordValidator);
        passwordConfirm.setValidators(passwordConfirmValidator);
      }
    }

    password.updateValueAndValidity({ emitEvent: false });
    passwordConfirm.updateValueAndValidity({ emitEvent: false });
  }


  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      tipoAcesso: ['', Validators.required]
    });
  }

  public salvar(): void {

  }


  public voltar(): void {
    const backNavigate = 'configuracoes/usuarios';
    this._router.navigate([backNavigate]);
  }

}


function confirmPassword(control: AbstractControl): object {
  if (!control.parent || !control) {
    return;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('passwordConfirm');

  if (!password || !passwordConfirm) {
    return;
  }

  if (passwordConfirm.value === '') {
    return;
  }

  if (password.value !== passwordConfirm.value) {
    return {
      passwordsNotMatch: true
    };
  }
}

