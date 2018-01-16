import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie/movie.service';
import { AppRoutingModule } from './/app-routing.module';
import { TheaterComponent } from './theater/theater.component';
import { TheaterService } from './theater/theater.service';
import { ProjectionComponent } from './projection/projection.component';
import { ProjectionService } from './projection/projection.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SeatsComponent } from './seats/seats.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    TheaterComponent,
    ProjectionComponent,
    MovieDetailsComponent,
    SeatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'cinema2-2d714'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [
    AppService,
    MovieService,
    TheaterService,
    ProjectionService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
