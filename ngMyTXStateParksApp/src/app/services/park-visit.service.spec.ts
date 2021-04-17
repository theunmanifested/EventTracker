import { TestBed } from '@angular/core/testing';

import { ParkVisitService } from './park-visit.service';

describe('ParkVisitService', () => {
  let service: ParkVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
