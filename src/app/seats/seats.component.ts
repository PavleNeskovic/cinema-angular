import { Component, OnInit, Input, Renderer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export interface Item { number: number, reserved: string }

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

itemsCollection: AngularFirestoreCollection<Item>;
private item: AngularFirestoreDocument<Item>;
items: Observable<any[]>;
myDynamicColor = "red";
empty = "empty";

  constructor(private readonly db: AngularFirestore,
  	public afAuth: AngularFireAuth,
  	private route: ActivatedRoute,
    private renderer: Renderer,
  	private location: Location) {
    this.itemsCollection = db.collection<Item>('items');
    this.items = db.collection('items', ref => ref.orderBy('number')).snapshotChanges();
  }

  createEmptySeats() {
    for (var i = 0; i < 190; i++) {
      this.addItem(i, this.empty);
    }
  }

  addItem(number: number, reserved: string) {
    // Persist a document id
    const id = this.db.createId();
    this.itemsCollection.add({ number: number, reserved: reserved });
  }

/* If it's empty - set uid, 
if uid is set - set to empty, 
otherwise someone else reserved the seat */
  selectSeat(item, event) {
    var reserved;
    var key = this.extractKey(item);
    var data = this.extractData(item);
    this.item = this.db.doc<Item>('items/' + key);
    if (this.isEmpty(item)) {
      reserved = this.afAuth.auth.currentUser.uid;
      this.renderer.setElementClass(event.target,"selected",true);
    } else if (this.isSelected(item)) {
      reserved = this.empty;
    }
    this.item.update({ number: data.number, reserved: reserved })
  }

  // updateDataWithTransaction(){
  //   return this.db.runTransaction(function(transaction) {
  //     // This code may get re-run multiple times if there are conflicts.
  //     return transaction.get(sfDocRef).then(function(sfDoc) {
  //         if (!sfDoc.exists) {
  //             throw "Document does not exist!";
  //         }
  
  //         var newPopulation = sfDoc.data().population + 1;
  //         transaction.update(sfDocRef, { population: newPopulation });
  //     });
  // }).then(function() {
  //     console.log("Transaction successfully committed!");
  // }).catch(function(error) {
  //     console.log("Transaction failed: ", error);
  // });
  
  // }

  extractKey(item){
    return item.payload.doc.id;
  }
  extractData(item){
    return item.payload.doc.data();
  }

  isEmpty(item){
    var data = this.extractData(item);
    return data.reserved === this.empty;
  }

  isTaken(item){
    var data = this.extractData(item);
    return data.reserved !== this.afAuth.auth.currentUser.uid && data.reserved !== this.empty;
  }

  isSelected(item){
    var data = this.extractData(item);
    return data.reserved === this.afAuth.auth.currentUser.uid;
  }


  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
