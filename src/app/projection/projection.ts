import { Movie } from '../movie/movie';
import { Theater } from '../theater/theater';

export class Projection {
	  constructor(
  	public id: number,
    public movie: Movie,
    public theater: Theater,
    public time: string,
    public seatsCreated: boolean,
    public isClicked: boolean = false) { }
}
