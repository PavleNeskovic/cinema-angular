import { Component, OnInit } from '@angular/core';
import { Theater } from './theater';
import { TheaterService } from './theater.service';


@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

	theaters: Theater[];
	model = new Theater("Name");
	errorRequired = "This field is required";
	admin = false;

  constructor(private theaterService: TheaterService) { }

  ngOnInit() {
  	this.getTheaters();
  }

    getTheaters (): void {
	  	this.theaterService.getTheaters()
	    .subscribe(theaters => this.theaters = theaters);
	}

	onSubmit(): void { 
	this.theaterService.addTheater(this.model).subscribe(theater => {
	    this.theaters.push(theater);
	  })
  }

  toggleAdmin() {
    this.admin = !this.admin;
  }

}
