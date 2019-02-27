import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterComponent } from './theater.component';
import { TheaterService } from './theater.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppService } from '../app.service';

describe('TheaterComponent', () => {
  let component: TheaterComponent;
  let fixture: ComponentFixture<TheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterComponent ],
      imports: [FormsModule, RouterModule],
      providers: [TheaterService, HttpClient, HttpHandler, AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
