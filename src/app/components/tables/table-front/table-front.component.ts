import { Component, OnInit,OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { SortEvent } from 'primeng/components/common/sortevent';
import { DatePipe } from '@angular/common';
import { CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-table-front',
  templateUrl: './table-front.component.html',
  styleUrls: ['./table-front.component.css']
})
export class TableFrontComponent implements OnInit, OnDestroy {

  @Input() cols: any[];
  @Input() data: any[];
  @Input() actions: any[];
  @Output() onRowSelect = new EventEmitter<any>();

  dataPipe: DatePipe = new DatePipe("pt-BR");
  currencyPipe: CurrencyPipe = new CurrencyPipe("pt-BR");
  selectedData: any;

  constructor() { }

  ngOnInit() {
    this.onRowSelect.emit(undefined);
  }

  ngOnDestroy(){
 
  }

  onRowSelectedAux(event){
    this.onRowSelect.emit(event.data);
  }


  getValueByField(data, field, currency) { 
    if (field && field.indexOf('\.') > -1) 
      return this.getValueByField(data[field.substring(0, field.indexOf('\.'))], field.substring(field.indexOf('\.') + 1, field.length), currency)
    else if (field && data) 
      return this.getValueFromData(data,field,currency) ;
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
        return this.getValueFromData(data, col.field, col.currency) ;
    }    
  }

  getValueFromData(data, filed, currency) {
    if (currency && data)
      return this.currencyPipe.transform(data[filed],'BRL',true).replace(/\s+/g, '.').replace('.BRL', '');
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
