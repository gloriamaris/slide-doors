import { Injectable } from '@angular/core';

@Injectable()
export class DoorInsertsService {

  constructor() { }

  getDoorInserts (type: string) {
    let inserts: Array<object>;

    switch (type) {

      case 'wood_grain':
        inserts = [
          {
            'name': 'Charcoal',
            'filename': 'charcoal.jpg'
          },
          {
            'name': 'Canadian Grey',
            'filename': 'canadiangrey.jpg'
          },
          {
            'name': 'Bourbon Cherry',
            'filename': 'bourboncherry.jpg'
          },
          {
            'name': 'Tobacco Cherry',
            'filename': 'tobaccocherry.jpg'
          },
          {
            'name': 'Choco Cherry',
            'filename': 'chococherry.jpg'
          },
          {
            'name': 'Classic Maple',
            'filename': 'classicmaple.jpg'
          },
          {
            'name': 'White Dolomite',
            'filename': 'whitedolomite.jpg'
          },
          {
            'name': 'Antique White',
            'filename': 'antiquewhite.jpg'
          },
          {
            'name': 'Ingot Grey',
            'filename': 'ingotgrey.jpg'
          },
          {
            'name': 'Stainless Aluminum',
            'filename': 'stainlessaluminum.jpg'
          },
          {
            'name': 'White Woodgrain',
            'filename': 'whitewoodgrain.jpg'
          }
        ]
      break;

      case 'high_gloss':
        inserts = [
          {
            'name': 'Basalto',
            'filename': 'basalto.jpg'
          },
          {
            'name': 'Black',
            'filename': 'black.jpg'
          },
          {
            'name': 'Blanco',
            'filename': 'blanco.jpg'
          },
          {
            'name': 'Cashmere',
            'filename': 'cashmere.jpg'
          },
          {
            'name': 'Euroline',
            'filename': 'euroline.jpg'
          },
          {
            'name': 'Guayan',
            'filename': 'guayan.jpg'
          },
          {
            'name': 'Magnolia',
            'filename': 'magnolia.jpg'
          },
          {
            'name': 'Olivio',
            'filename': 'olivio.jpg'
          },
          {
            'name': 'Olmo',
            'filename': 'olmo.jpg'
          },
          {
            'name': 'Pale Grey',
            'filename': 'palegrey.jpg'
          },
          {
            'name': 'Roble Frape',
            'filename': 'roblefrape.jpg'
          },
        ]
      break;
    }

    return inserts;
  }

}
