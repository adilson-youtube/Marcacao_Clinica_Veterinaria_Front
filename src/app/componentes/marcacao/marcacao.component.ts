import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcacao',
  templateUrl: './marcacao.component.html',
  styleUrls: ['./marcacao.component.css']
})
export class MarcacaoComponent implements OnInit {

  selectedState: any = null;

  dateValue: Date = new Date;

  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  cities1: any[] = [];
  
  cities2: any[] = [];
  
  city1:any = null;

  city2:any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
