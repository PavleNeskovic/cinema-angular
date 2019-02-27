import { TestBed, inject } from '@angular/core/testing';

import { TheaterService } from './theater.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../app.service';


describe('TheaterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheaterService, AppService],
      imports: [ReactiveFormsModule, HttpClientModule]
    });
  });

  it('should be created', inject([TheaterService], (service: TheaterService) => {
    expect(service).toBeTruthy();
  }));
});
