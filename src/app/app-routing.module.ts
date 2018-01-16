import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { TheaterComponent } from './theater/theater.component';
import { ProjectionComponent } from './projection/projection.component';
import { SeatsComponent } from './seats/seats.component';

const routes: Routes = [
	{ path: 'movie', component: MovieComponent },
	{ path: 'theater', component: TheaterComponent },
	{ path: 'projection/:id', component: ProjectionComponent },
	{ path: 'seats', component: SeatsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}
