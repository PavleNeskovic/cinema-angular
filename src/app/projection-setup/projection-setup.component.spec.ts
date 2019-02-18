import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionSetupComponent } from './projection-setup.component';

describe('ProjectionSetupComponent', () => {
  let component: ProjectionSetupComponent;
  let fixture: ComponentFixture<ProjectionSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionSetupComponent ]
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
