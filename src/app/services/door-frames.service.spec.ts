import { TestBed, inject } from '@angular/core/testing';

import { DoorFramesService } from './door-frames.service';

describe('DoorFramesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoorFramesService]
    });
  });

  it('should be created', inject([DoorFramesService], (service: DoorFramesService) => {
    expect(service).toBeTruthy();
  }));
});
