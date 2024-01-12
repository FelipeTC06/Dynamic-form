import { TestBed } from '@angular/core/testing';

import { ThreadedResponseService } from './threaded-response.service';

describe('ThreadedResponseService', () => {
  let service: ThreadedResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadedResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
