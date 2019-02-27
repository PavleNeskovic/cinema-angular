import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionComponent } from './projection.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../movie/movie.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { ProjectionService } from './projection.service';
import { AppService } from '../app.service';

describe('ProjectionComponent', () => {
  let component: ProjectionComponent;
  let fixture: ComponentFixture<ProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionComponent ],
      imports: [FormsModule,  RouterModule.forRoot([])],
      providers: [ProjectionService, AppService, HttpClient, HttpHandler, {provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
