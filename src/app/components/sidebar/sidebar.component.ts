import { Component, OnInit } from '@angular/core';

import { DoorInsertsService } from '../../services/door-inserts.service';
import { DoorSystemsService } from '../../services/door-systems.service';
import { DoorDesignsService } from '../../services/door-designs.service';

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
  public doorDesigns: object;
  public selectedOnTab: object;

  constructor(private doorInsertsService: DoorInsertsService, 
    private doorSystemsService: DoorSystemsService,
    private doorDesignsService: DoorDesignsService) {
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
      door_system: {},
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

    this.doorDesigns = {
      euro_line: this.getDoorDesignsFromService('euro_line'),
      infinity_line: this.getDoorDesignsFromService('infinity_line')
    }
  }

  ngOnInit() {

    this.isEuroLine = false;

    this.isNumDoorsClicked = false;
    this.numDoor = 'Select number of doors';
    this.doorDesign = 'Odna';
    this.doorFrame = 'T-Edge';

    let doorSysType = (this.isEuroLine)? 'euro_line': 'infinity_line';
    let doorInsType = (this.isHighGloss)? 'high_gloss': 'wood_grain';
    
    this.selectedOnTab = {
      door_system: {
        [doorSysType]: this.doorSystems[doorSysType][0]['name']
      },
      door_inserts: this.doorInserts[doorInsType][0]['name']
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

  getDoorDesignsFromService (type: string) {
    return this.doorDesignsService.getDoorDesigns(type);
  }

  handleNextStep (currentStep: string, nextStep: string) {
    this.openedTab[currentStep] = false;
    this.openedTab[nextStep] = true;
  }

  handleDoorFrame (event: any, frame: string) {
    event.preventDefault();
    this.doorFrame = frame;
  }

  handleDoorDesign (event: any, design: string) {
    event.preventDefault();
    this.doorDesign = design;
  }

  handleSidebarPane (tab: string) {
    this.openedTab[tab] = !this.openedTab[tab];
  }

  handleDoorLine (event: any) {
    event.preventDefault()
    this.isEuroLine = !this.isEuroLine;
  }

  handlePaneDoorSystem (event: any, type: string, value: string) {
    event.preventDefault();
    this.selectedOnTab['door_system'] = { [type]: value }
  }

  handleDoorInserts (event: any) {
    event.preventDefault();

    this.isHighGloss = !this.isHighGloss;
  }

  handlePaneDoorInserts (event: any, type: string, value: string) {
    event.preventDefault();
    this.selectedOnTab['door_inserts'][type] = value;
  }

  handleNumDoorsDropdown () {
    this.isNumDoorsClicked = !this.isNumDoorsClicked;
  }

  handleNumDoorsOption ($event: any) {
    this.numDoor = $event.target.innerText;
  }

}
