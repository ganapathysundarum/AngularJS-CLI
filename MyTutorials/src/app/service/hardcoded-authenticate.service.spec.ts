import { TestBed } from '@angular/core/testing';

import { HardcodedAuthenticateService } from './hardcoded-authenticate.service';

describe('HardcodedAuthenticateService', () => {
  let service: HardcodedAuthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
