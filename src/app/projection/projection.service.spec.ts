import { TestBed, inject } from '@angular/core/testing';

import { ProjectionService } from './projection.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../app.service';

describe('ProjectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectionService, AppService],
      imports: [ReactiveFormsModule, HttpClientModule]
    });
  });

  it('should be created', inject([ProjectionService], (service: ProjectionService) => {
    expect(service).toBeTruthy();
  }));
});
