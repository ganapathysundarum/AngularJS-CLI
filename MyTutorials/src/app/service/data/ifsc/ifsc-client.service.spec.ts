import { TestBed } from '@angular/core/testing';

import { IfscCLientService } from './ifsc-client.service';

describe('IfscCLientService', () => {
  let service: IfscCLientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IfscCLientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
