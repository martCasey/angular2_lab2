import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

//Variable?
//Declare and initialise a String
clickMessage: string = "uiouou8u";

  constructor() { }

//This method handles the button click
onClickMe() {
//set the message
this.clickMessage = "You clicked the button!";
}

  ngOnInit() {
  }

}
