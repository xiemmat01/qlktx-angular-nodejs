import { TestBed } from '@angular/core/testing';

import { DkthueService } from './dkthue.service';

describe('DkthueService', () => {
  let service: DkthueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DkthueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
