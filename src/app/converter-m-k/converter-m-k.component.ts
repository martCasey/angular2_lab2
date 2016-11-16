/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter-m-k',
  templateUrl: './converter-m-k.component.html',
  styleUrls: ['./converter-m-k.component.css']
})
export class ConverterMKComponent implements OnInit {
//Declare and initialise a String

mile: number = null;
kilometer: number = null;
  

  constructor() { }

  convertM_K(kilomConv: number)
  {
    this.mile = kilomConv*0.62137;
  }

  convertK_M(mileConv: number)
  {
    this.kilometer = mileConv/0.62137;
  }


  ngOnInit() {
  }

}
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter-m-k',
  templateUrl: './converter-m-k.component.html',
  styleUrls: ['./converter-m-k.component.css']
})
export class ConverterMKComponent implements OnInit {

  kilometers : number = null;
  miles : number = null;

  constructor() { }

  KmToMiles() {
    this.miles = this.kilometers * 0.621371192237;
    //this.miles = this.kilometers * 0.621371192237;
  }

  MilesToKm() {
    this.kilometers = this.miles / 0.621371192237;
    //this.kilometers = this.miles / 0.621371192237; 
  }

  ngOnInit() {
  }

}