import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public openedTab: object;
  public isEuroLine: boolean;
  public isNumDoorsClicked: boolean;
  public numDoor: string;
  public doorDesign: string;
  public doorFrame: string;

  constructor() {
    this.openedTab = {
      door_system: true,
      opening_size: false,
      number_doors: false,
      door_design: false,
      door_frame: false,
      door_size: false,
      price_inquiry: false
    };

  }

  ngOnInit() {
    this.isNumDoorsClicked = false;
    this.numDoor = 'Select number of doors';
    this.doorDesign = 'Odna';
    this.doorFrame = 'T-Edge';
  }

  handleDoorFrame (frame: string) {
    this.doorFrame = frame;
  }

  handleDoorDesign (design: string) {
    this.doorDesign = design;
  }

  handleSidebarPane (tab: string) {
    this.openedTab[tab] = !this.openedTab[tab];
  }

  handleDoorLine () {
    this.isEuroLine = !this.isEuroLine;
  }

  handleNumDoorsDropdown () {
    this.isNumDoorsClicked = !this.isNumDoorsClicked;
  }

  handleNumDoorsOption ($event: any) {
    this.numDoor = $event.target.innerText;
  }

}
