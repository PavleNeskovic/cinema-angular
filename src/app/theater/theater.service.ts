import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Theater } from './theater';
import { AppService } from '../app.service';

@Injectable()
export class TheaterService {
 
  constructor(
    private http: HttpClient,
    private appService: AppService
    ) { }

  	getTheaters (): Observable<Theater[]> {
    return this.http.get<Theater[]>(this.appService.baseUrl + '/theatre/all')
      .pipe(
        tap(theaters => this.appService.log(`fetched theaters`)),
        catchError(this.appService.handleError('getTheaters', []))
      );
  	}

    addTheater (theater: Theater): Observable<Theater> {
    return this.http.post<Theater>(this.appService.baseUrl + '/theatre/new', theater, this.appService.httpOptions).pipe(
      tap((theater: Theater) => this.appService.log(`added theater w/ name=${theater.name}`)),
      catchError(this.appService.handleError<Theater>('addTheater'))
    );
  	}
}
