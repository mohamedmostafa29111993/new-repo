import { TestBed } from '@angular/core/testing';

import { GetTreeDataService } from './get-tree-data.service';

describe('GetTreeDataService', () => {
  let service: GetTreeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTreeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
