import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {

  @Input() title;
  @Input() form: FormGroup;
  @Input() visible;
  @Output() onSaveClicked = new EventEmitter();
  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public salvar(): void {
    this.onSaveClicked.emit();
  }

}
