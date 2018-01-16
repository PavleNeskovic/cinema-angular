import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

items: Observable<any[]>;

  constructor(db: AngularFirestore,
  	private route: ActivatedRoute,
  	private location: Location) {
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
  }

}
