import { Component, OnInit } from '@angular/core';

import { DoorInsertsService } from '../../services/door-inserts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public openedTab: object;
  public isEuroLine: boolean;
  public isNumDoorsClicked: boolean;
  public isHighGloss: boolean;
  public numDoor: string;
  public doorDesign: string;
  public doorFrame: string;
  public doorInserts: object;

  constructor(private doorInsertsService: DoorInsertsService) {
    this.openedTab = {
      door_system: false,
      opening_size: false,
      number_doors: false,
      door_design: false,
      door_frame: false,
      door_inserts: true,
      price_inquiry: false
    }

    this.doorInserts = {
      wood_grain: this.getInsertsFromService('wood_grain'),
      high_gloss: this.getInsertsFromService('high_gloss')
    };
  }

  ngOnInit() {

    this.isNumDoorsClicked = false;
    this.numDoor = 'Select number of doors';
    this.doorDesign = 'Odna';
    this.doorFrame = 'T-Edge';
  }

  getInsertsFromService (type: string) {
    let response = this.doorInsertsService.getDoorInserts(type);

    return response;
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

  handleDoorLine (event: any) {
    event.preventDefault()
    this.isEuroLine = !this.isEuroLine;
  }

  handleDoorInserts (event: any) {
    event.preventDefault();

    this.isHighGloss = !this.isHighGloss;
  }

  handleNumDoorsDropdown () {
    this.isNumDoorsClicked = !this.isNumDoorsClicked;
  }

  handleNumDoorsOption ($event: any) {
    this.numDoor = $event.target.innerText;
  }

}
