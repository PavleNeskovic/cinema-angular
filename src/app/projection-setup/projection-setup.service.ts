import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ProjectionSetup } from './projection-setup';
import { AppService } from '../app.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectionSetupService {


  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient,
    private appService: AppService) { }
    
    addProjection (projection: ProjectionSetup): Observable<ProjectionSetup> {
      return this.http.post<ProjectionSetup>(this.appService.baseUrl + '/addProjection', projection, this.appService.httpOptions).pipe(
        tap((projection: ProjectionSetup) => this.appService.log(`added projection w/ name=${projection.movieTitle}`)),
        catchError(this.appService.handleError<ProjectionSetup>('addprojection'))
      );
      }
  }

