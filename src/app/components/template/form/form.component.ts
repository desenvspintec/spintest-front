import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() title;
  @Output() voltar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  voltarAux(event){
    this.voltar.emit();
  }

}
