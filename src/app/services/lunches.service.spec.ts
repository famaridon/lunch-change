import { TestBed, inject } from '@angular/core/testing';

import { LunchesService } from './lunches.service';

describe('LunchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LunchesService]
    });
  });

  it('should be created', inject([LunchesService], (service: LunchesService) => {
    expect(service).toBeTruthy();
  }));
});
