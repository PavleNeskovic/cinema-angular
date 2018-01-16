import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';

import { Projection } from './projection';
import { ProjectionService } from './projection.service';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {
	projections: Projection[];

  constructor(private route: ActivatedRoute,
    private location: Location,
    private projectionService: ProjectionService) { }

  ngOnInit() {
  	this.getProjection();
  }

  getProjection (): void {
  	const id = +this.route.snapshot.paramMap.get('id');
	  	this.projectionService.getProjectionsForId(id)
	    .subscribe(projections => this.projections = projections);
	}

}
