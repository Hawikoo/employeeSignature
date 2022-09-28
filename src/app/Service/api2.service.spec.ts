import { TestBed } from '@angular/core/testing';

import { API2Service } from './api2.service';

describe('API2Service', () => {
  let service: API2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(API2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
