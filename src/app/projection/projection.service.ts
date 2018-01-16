import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Projection } from './projection';
import { AppService } from '../app.service';

@Injectable()
export class ProjectionService {

  constructor(
    private http: HttpClient,
    private appService: AppService
    ) { }


  //   getProjectionForId (projectionId: string): Observable<Projection> {
  //   return this.http.get(this.url + "byid/"+projectionId)
  //                   .map(this.extractDataService.extractData)
  //                   .catch(this.extractDataService.handleError);
  // }

  getProjectionForId (projectionId: number): Observable<Projection> {
    return this.http.get<Projection>(this.appService.baseUrl + "/projection/byid/" + projectionId)
    .pipe(
    	tap((projection: Projection) => this.appService.log(`added projection w/ name=${projection.id}`)),
      	catchError(this.appService.handleError<Projection>('getProjectionForId'))
    );
  	}

  getProjectionsForId (projectionId: number): Observable<Projection[]> {
    return this.http.get<Projection[]>(this.appService.baseUrl + "/projections/byid/" + projectionId)
    .pipe(
      tap((projection: Projection[]) => this.appService.log(`added projection w/`)),
        catchError(this.appService.handleError<Projection[]>('getProjectionForId'))
    );
    }

  getProjectionForTitle (movieTitle: string): Observable<Projection> {
    return this.http.get<Projection>(this.appService.baseUrl + "/projection/" + movieTitle)
    .pipe(
      tap((projection: Projection) => this.appService.log(`added projection w/ name=${projection.id}`)),
        catchError(this.appService.handleError<Projection>('getProjectionForId'))
    );
    }

}
