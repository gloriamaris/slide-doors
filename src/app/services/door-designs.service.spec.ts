import { TestBed, inject } from '@angular/core/testing';

import { DoorDesignsService } from './door-designs.service';

describe('DoorDesignsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoorDesignsService]
    });
  });

  it('should be created', inject([DoorDesignsService], (service: DoorDesignsService) => {
    expect(service).toBeTruthy();
  }));
});
