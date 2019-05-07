import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

import { PubSubService } from 'angular7-pubsub';
import { DataService } from '../../services/data-service/data.service';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-table-front',
  templateUrl: './table-front.component.html',
  styleUrls: ['./table-front.component.css']
})
export class TableFrontComponent implements OnInit {

  @Input() cols: any[];
  @Input() data: any[];
  @Input() actions: any[];
  @Output() novoClick = new EventEmitter<any>();
  @Output() tableDoubleClick = new EventEmitter<any>();
  @Input() title;
  @Input() chanelSelected;
  @Input() editUrl;

  dataPipe: DatePipe = new DatePipe("pt-BR");
  currencyPipe: CurrencyPipe = new CurrencyPipe("pt-BR");
  selectedData: any;
  @Output() selectedDataChange = new EventEmitter<any>();

  constructor(private pubSubService: PubSubService,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {

    this.actions.forEach(act => {
      act.click = act.command;
      act.command = this.command.bind(this);
    });
    this.actions.push({
      label: 'Alterar',
      icon: 'pi pi-pencil',
      command: this.alterar.bind(this)
    });
    this.selectedData = this.dataService.getData(this.chanelSelected);
  }

  novoClickAux(event) {
    this.dataService.setData(this.chanelSelected, undefined);
    this.router.navigate([this.editUrl]);
  }

  alterar(event) {
    this.dataService.setData(this.chanelSelected, this.selectedData);
    this.router.navigate([this.editUrl]);
  }

  onRowSelect(event) {
    if (this.chanelSelected) {
      this.dataService.setData(this.chanelSelected, event.data);
    }
  }

  tableDoubleClickAux(event) {
    this.tableDoubleClick.emit(event);
  }

  command(event) {
    this.actions.forEach(act => {
      if (act.label === event.item.label) {
        act.click(this.selectedData);
      }
    });
  }


  getValueByField(data, field, currency) {
    if (field && field.indexOf('\.') > -1)
      return this.getValueByField(data[field.substring(0, field.indexOf('\.'))], field.substring(field.indexOf('\.') + 1, field.length), currency)
    else if (field && data)
      return this.getValueFromData(data, field, currency);
    else
      return null;
  }

  getValue(data, col) {
    if (col.mask)
      return this.dataPipe.transform(data[col.field], col.mask);
    else {
      if (col.field && col.field.indexOf('\.') > -1)
        return this.getValueByField(data, col.field, col.currency);
      else
        return this.getValueFromData(data, col.field, col.currency);
    }
  }

  getValueFromData(data, filed, currency) {
    if (currency && data)
      return this.currencyPipe.transform(data[filed], 'BRL', true).replace(/\s+/g, '.').replace('.BRL', '');
    return data[filed];
  }

  tableSort(event: SortEvent) {
    if (!event.field)
      return;
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
    });
  }

}
