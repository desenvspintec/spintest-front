import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgenciaService } from 'src/app/service/agencia/agencia.service';

@Component({
  selector: 'app-gerar-conta-dialog',
  templateUrl: './gerar-conta-dialog.component.html',
  styleUrls: ['./gerar-conta-dialog.component.css']
})
export class GerarContaDialogComponent implements OnInit {

  @Input() display = false;
  @Output() displayChange: EventEmitter<any> = new EventEmitter();
  @Output() gerarConta: EventEmitter<any> = new EventEmitter();
  @Input() title = "";
  results = [];
  agencias = [];
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private agenciaService: AgenciaService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      idAgencia: ['', Validators.required]
    });
    this.agenciaService.findAll(agencias => {
      this.agencias = agencias;
    });

  }

  confirmar() {
    if (this.form.invalid)
      return;

    this.gerarConta.emit(this.form.value);
  }

  onHide(event) {
    this.displayChange.emit(false);
  }

  search(event) {
    this.results = this.agencias.filter(age =>{
      return age.dsAgencia.toUpperCase().indexOf(event.query.toUpperCase()) !== -1;
    });
  }

}
