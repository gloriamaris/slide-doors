import { Injectable } from '@angular/core';

@Injectable()
export class DoorFramesService {

  constructor() { }

  getDoorFrames (type: string) {
  	let frames: Array<object>;

  	switch (type) {
  		case 'euro_line':
  			
  			frames = [
  				{
  					name: 'T-Edge',
  					filename: 'T_Edge.jpg'
  				},
  				{
  					name: 'U-Edge',
  					filename: 'U_Edge.jpg'
  				}
  			]
  			
  			break;
  		
  		case 'infinity_line':
  			frames = [
  				{
  					name: 'Edmonton',
  					filename: 'Edmonton.png'
  				},
  				{
  					name: 'Hudson',
  					filename: 'hudson.jpg'
  				},
  				{
  					name: 'Niagara',
  					filename: 'Niagara.png'
  				},
  				{
  					name: 'Yukon',
  					filename: 'yukon.png'
  				}
  			]

  			break;
  	}

  	return frames;
  }
}
