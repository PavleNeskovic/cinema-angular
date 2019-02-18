import { TestBed, inject } from '@angular/core/testing';

import { ProjectionSetupService } from './projection-setup.service';

describe('ProjectionSetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectionSetupService]
    });
  });

  it('should be created', inject([ProjectionSetupService], (service: ProjectionSetupService) => {
    expect(service).toBeTruthy();
  }));
});
