import { Injectable } from '@angular/core';

@Injectable()
export class DoorDesignsService {

  constructor() { }

  getDoorDesigns (type) {
  	let designs = [
  		{
  			name: 'Odna',
  			filename: 'door1.png'
  		},
  		{
  			name: 'Stella',
  			filename: 'door8.png'
  		},
  		{
  			name: 'Centro',
  			filename: 'door7.png'
  		},
  		{
  			name: 'Pluro',
  			filename: 'door9.png'
  		},
  		{
  			name: 'Scala',
  			filename: 'door2.png'
  		},
  		{
  			name: 'Tira',
  			filename: 'door4.png'
  		}
  	]

  	if (type === 'euro_line') {
  		return designs.slice(0, 2);
  	}

  	return designs;
  }

}
