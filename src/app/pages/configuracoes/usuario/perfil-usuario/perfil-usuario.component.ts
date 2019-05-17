import { Component, OnInit } from '@angular/core';
import { PTBR } from 'src/app/utils/calendar';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  public ptBr = PTBR;
  public generos: any[] = [];
  constructor() {

    this.generos = [{
      label: 'Masculino',
      value: 'masculino',
    },
    {
      label: 'Femeninino',
      value: 'femenino'
    },
    {
      label: 'Outro',
      value: 'outro'
    }];

  }

  ngOnInit() {
  }

}
