import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[];
  body = {
  "title": "Ted",
  "decription": "Opis teda",
  "imageUrl": "httpurl"
  };
  model = new Movie("Name", "Description");
  submitted = false;
  errorRequired = "This field is required";
  admin = false;

  constructor(private movieService: MovieService) {}
 
  ngOnInit(): void {
    this.getMovies();
  }

  onSubmit(): void { 
    this.movieService.addMovie(this.model).subscribe(movie => {
        this.movies.push(movie);
      })
  }

  getMovies (): void {
  this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }

  toggleAdmin() {
    this.admin = !this.admin;
  }
}
