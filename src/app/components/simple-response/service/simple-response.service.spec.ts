import { TestBed } from '@angular/core/testing';

import { SimpleResponseService } from './simple-response.service';

describe('SimpleResponseService', () => {
  let service: SimpleResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
