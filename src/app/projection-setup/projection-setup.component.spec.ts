import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionSetupComponent } from './projection-setup.component';
import { ProjectionSetupService } from './projection-setup.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppService } from '../app.service';
import { MovieService } from '../movie/movie.service';
import { TheaterService } from '../theater/theater.service';

describe('ProjectionSetupComponent', () => {
  let component: ProjectionSetupComponent;
  let fixture: ComponentFixture<ProjectionSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionSetupComponent ],
      imports: [FormsModule, RouterModule],
      providers: [ProjectionSetupService, HttpClient, HttpHandler, AppService, MovieService, TheaterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
