import { TestBed, inject } from '@angular/core/testing';

import { TimeCounterService } from './time-counter.service';

describe('TimeCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeCounterService]
    });
  });

  it('should be created', inject([TimeCounterService], (service: TimeCounterService) => {
    expect(service).toBeTruthy();
  }));
});
