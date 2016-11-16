import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  templateUrl: './loop-back.component.html',
  styleUrls: ['./loop-back.component.css']
})
//Think java class
export class LoopBackComponent implements OnInit {
  //Declare and initialise a String
  message: string = "";

  constructor() { }

  showMe(myMessage: string)  {
    this.message = myMessage;
  }

  ngOnInit() {
  }

}
