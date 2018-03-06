import { TestBed, inject } from '@angular/core/testing';

import { DoorSystemsService } from './door-systems.service';

describe('DoorSystemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoorSystemsService]
    });
  });

  it('should be created', inject([DoorSystemsService], (service: DoorSystemsService) => {
    expect(service).toBeTruthy();
  }));
});
