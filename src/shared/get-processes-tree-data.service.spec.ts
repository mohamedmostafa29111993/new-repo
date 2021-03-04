import { TestBed } from '@angular/core/testing';

import { GetProcessesTreeDataService } from './get-processes-tree-data.service';

describe('GetProcessesTreeDataService', () => {
  let service: GetProcessesTreeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProcessesTreeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
