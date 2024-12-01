import { TestBed } from '@angular/core/testing';

import { GraphCreatorService } from './graph-creator.service';

describe('GraphCreatorService', () => {
  let service: GraphCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
