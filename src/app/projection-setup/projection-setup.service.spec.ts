import { TestBed, inject } from '@angular/core/testing';

import { ProjectionSetupService } from './projection-setup.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../app.service';

describe('ProjectionSetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectionSetupService, AppService],
      imports: [ReactiveFormsModule, HttpClientModule]
    });
  });

  it('should be created', inject([ProjectionSetupService], (service: ProjectionSetupService) => {
    expect(service).toBeTruthy();
  }));
});
