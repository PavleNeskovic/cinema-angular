import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { Theater } from '../theater/theater';
import { TheaterService } from '../theater/theater.service';
import { MovieService } from '../movie/movie.service';
import { ProjectionSetupService } from './projection-setup.service';
import { ProjectionSetup } from './projection-setup';

import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendarGregorian } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Component({
  selector: 'app-projection-setup',
  providers: [ NgbCalendarGregorian ],
  templateUrl: './projection-setup.component.html',
  styleUrls: ['./projection-setup.component.css']
})
export class ProjectionSetupComponent implements OnInit {
  movies: Movie[];
  theaters: Theater[];
  projections;
  time;
  date;
  projection: ProjectionSetup = new ProjectionSetup("", "", "");
  constructor(private projectionService: ProjectionSetupService, 
              private movieService: MovieService, 
              private theaterService: TheaterService,
              private calendar: NgbCalendarGregorian) { }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
    this.theaterService.getTheaters()
	    .subscribe(theaters => this.theaters = theaters);
  }

  selectMovie(movie) {
    this.projection.movieTitle = movie;
  }

  selectTheater(theater) {
    this.projection.theatreName = theater;
  }

  onSubmit() {
    this.projection.time += " " + this.date.day + "-" + this.date.month + "-" + this.date.year;
    this.projectionService.addProjection(this.projection).subscribe(projection => {
	    this.projections.push(projection);
	  })
  }


}
