import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() title;
  @Input() form;
  @Output() voltar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  voltarAux(event){
    this.voltar.emit();
  }

}
