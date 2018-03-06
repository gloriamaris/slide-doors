import { Component, OnInit } from '@angular/core';

import { DoorInsertsService } from '../../services/door-inserts.service';
import { DoorSystemsService } from '../../services/door-systems.service';

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
  public doorSystems: object;
  public selectedOnTab: object;

  constructor(private doorInsertsService: DoorInsertsService, private doorSystemsService: DoorSystemsService) {
    this.openedTab = {
      door_system: true,
      opening_size: false,
      number_doors: false,
      door_design: false,
      door_frame: false,
      door_inserts: false,
      price_inquiry: false
    }

    this.selectedOnTab = {
      door_system: '',
      opening_size: '',
      number_doors: '',
      door_design: '',
      door_frame: '',
      door_inserts: '',
      price_inquiry: ''
    }

    this.doorInserts = {
      wood_grain: this.getInsertsFromService('wood_grain'),
      high_gloss: this.getInsertsFromService('high_gloss')
    }

    this.doorSystems = {
      euro_line: this.getSystemsFromService('euro_line'),
      infinity_line: this.getSystemsFromService('infinity_line')
    }

  }

  ngOnInit() {

    this.isEuroLine = true;

    this.isNumDoorsClicked = false;
    this.numDoor = 'Select number of doors';
    this.doorDesign = 'Odna';
    this.doorFrame = 'T-Edge';

    let type = (this.isEuroLine)? 'euro_line': 'infinity_line';


    this.selectedOnTab = {
      door_system: this.doorSystems[type][0]['name']
    }
  }

  getMaxPanelSize () {
    return (this.isEuroLine)? 98: 120;
  }

  getInsertsFromService (type: string) {
    return this.doorInsertsService.getDoorInserts(type);
  }

  getSystemsFromService (type: string) {
    return this.doorSystemsService.getDoorSystems(type);
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
