import { TestBed } from '@angular/core/testing';

import { TempCodeService } from './temp-code.service';

describe('TempCodeService', () => {
  let service: TempCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
