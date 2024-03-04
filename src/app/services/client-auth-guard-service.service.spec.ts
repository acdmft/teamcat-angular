import { TestBed } from '@angular/core/testing';

import { ClientAuthGuardServiceService } from './client-auth-guard-service.service';

describe('ClientAuthGuardServiceService', () => {
  let service: ClientAuthGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAuthGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
