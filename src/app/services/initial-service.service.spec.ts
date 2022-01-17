import { TestBed } from '@angular/core/testing';

import { InitialServiceService } from './initial-service.service';

describe('InitialServiceService', () => {
  let service: InitialServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
