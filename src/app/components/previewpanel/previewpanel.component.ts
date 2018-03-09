import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-previewpanel',
  templateUrl: './previewpanel.component.html',
  styleUrls: ['./previewpanel.component.css']
})
export class PreviewpanelComponent implements OnInit {

	@Input() numDoors: number;

  constructor() { }

  ngOnInit() {
  	this.numDoors = 2;
  }



}
