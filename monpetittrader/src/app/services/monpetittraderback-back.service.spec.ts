import { TestBed } from '@angular/core/testing';

import { MonpetittraderbackBackService } from './monpetittraderback-back.service';

describe('MonpetittraderbackBackService', () => {
  let service: MonpetittraderbackBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonpetittraderbackBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
