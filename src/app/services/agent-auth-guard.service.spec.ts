import { TestBed } from '@angular/core/testing';

import { AgentAuthGuardService } from './agent-auth-guard.service';

describe('AgentAuthGuardService', () => {
  let service: AgentAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
