import { Injectable } from '@angular/core';

@Injectable()
export class DoorSystemsService {

  constructor() { }

  getDoorSystems (type: string) {
    let systems: Array<any>;

    switch (type) {

      case 'euro_line':
        systems = [
          {
            name: 'Sliding Door With Bottom Track',
            filenames: [
              'slidingdoorwithbottomtrack.jpg',
              'slidingdoorwithbottomtrack_.png'
            ]
          },
          {
            name: 'Swing Door',
            filenames: [
              'swingdoor.jpg',
              'swingdoor_.png'
            ]
          }
        ]
        break;

      case 'infinity_line':
        systems = [
          {
            name: 'Folding Door',
            filenames: [
              'foldingdoor.jpg',
              'foldingdoor_.png'
            ]
          },
          {
            name: 'Sliding Door With Bottom Track',
            filenames: [
              'slidingdoorwithbottomtrack.jpg',
              'slidingdoorwithbottomtrack_.png'
            ]
          },
          {
            name: 'Suspended Sliding (No Bottom Track)',
            filenames: [
              'suspendedslidingnobottomtrack.jpg',
              'suspendedslidingnobottomtrack_.png'
            ]
          },
          {
            name: 'Swing Door',
            filenames: [
              'swingdoor.jpg',
              'swingdoor_.png'
            ]
          },
          {
            name: 'Wall Slide Door',
            filenames: [
              'wallslidedoor.jpg',
              'wallslidedoor_.png'
            ]
          }
        ]
      break;
    }

    return systems;
  }

}
