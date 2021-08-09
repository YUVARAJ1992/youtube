import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-milk-child',
  templateUrl: './milk-child.component.html',
  styleUrls: ['./milk-child.component.css']
})
export class MilkChildComponent implements OnInit {

  @Input('content') information : any;

  @Output() rowData = new EventEmitter(); 
  listdata : any = [
    {
      name : "moch",
      crime: 420
    },
    {
      name : "milk",
      crime: 0
    },
    {
      name : "matcha",
      crime: 20
    }
  ]

  filterdata : any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
  this.filterdata = this.listdata.filter((value : any, index : any) => {
  return value.name.includes(this.information);
  })
  }

  onClickRow(row : any){
  console.log(row);
  this.rowData.emit(row);
  }

}
