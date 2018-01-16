import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie/movie';
import { MovieService } from '../movie/movie.service';
import { ProjectionService } from '../projection/projection.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

@Input() movie: Movie;

  constructor( private route: ActivatedRoute,
    private movieService: MovieService,
    private projectionService: ProjectionService,
    private location: Location) { }

  ngOnInit() {
  }

  getMovie(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.projectionService.getProjectionForId(id)
    //   .subscribe(movie => this.movie = movie);
  }

}
