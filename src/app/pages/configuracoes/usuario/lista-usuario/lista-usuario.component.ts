import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PTBR } from 'src/app/utils/calendar';
import { Channels } from 'src/environments/channels';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  public data: any[];
  public cols: any[];
  public actions: any[] = [];
  public ptBr = PTBR;
  public title: string = 'Usuários'
  public form: FormGroup;

  public channel: any = '';

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.cols = [
      { field: 'id', header: 'Código', style: 'text-align: left;' },
      { field: 'nome', header: 'Nome', style: 'text-align: left;' },
      { field: 'email', header: 'E-mail', style: 'text-align: left;' },
      { field: 'tipoAcesso', header: 'Tipo de Acesso', style: 'text-align: left;' },
    ];
  }

  ngOnInit() {
    this._buildForm();
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({

    })
  }

}
