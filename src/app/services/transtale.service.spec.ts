import { TestBed } from '@angular/core/testing';

import { TranstaleService } from './transtale.service';

describe('TranstaleService', () => {
  let service: TranstaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranstaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
