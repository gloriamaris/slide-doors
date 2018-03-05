import { TestBed, inject } from '@angular/core/testing';

import { DoorInsertsService } from './door-inserts.service';

describe('DoorInsertsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoorInsertsService]
    });
  });

  it('should be created', inject([DoorInsertsService], (service: DoorInsertsService) => {
    expect(service).toBeTruthy();
  }));
});
