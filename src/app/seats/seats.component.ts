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
  success = false;

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

  selectSeat(item, event) {
    var key = this.extractKey(item);
    var data = this.extractData(item);
    this.item = this.db.doc<Item>('items/' + key);
    var docRef = this.db.firestore.collection('items').doc(key);
    var that = this;
    return this.db.firestore.runTransaction(function (transaction) {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(docRef).then(function (snapshot) {
        that.updateSeat(snapshot, that, event, transaction, docRef, data);
      });
    }).then(function () {
      console.log("Transaction successfully committed!");
    }).catch(function (error) {
      console.log("Transaction failed: ", error);
    });
  }

  /*If it's empty - set uid, 
  if uid is set - set to empty, 
  otherwise someone else reserved the seat */
  private updateSeat(snapshot: firebase.firestore.DocumentSnapshot, that: this, event: any,
    transaction: firebase.firestore.Transaction, docRef: firebase.firestore.DocumentReference, data: any) {
    var reserved;
    if (snapshot.data().reserved == "empty") {
      reserved = that.afAuth.auth.currentUser.uid;
      that.renderer.setElementClass(event.target, "selected", true);
      transaction.update(docRef, { number: data.number, reserved: reserved });
    }
    else if (snapshot.data().reserved == that.afAuth.auth.currentUser.uid) {
      reserved = "empty";
      transaction.update(docRef, { number: data.number, reserved: reserved });
    }
    else {
      transaction.update(docRef, { number: data.number, reserved: snapshot.data().reserved });
    }
    return reserved;
  }

  extractKey(item) {
    return item.payload.doc.id;
  }
  extractData(item) {
    return item.payload.doc.data();
  }

  isEmpty(item) {
    var data = this.extractData(item);
    return data.reserved === this.empty;
  }

  isTaken(item) {
    var data = this.extractData(item);
    return data.reserved !== this.afAuth.auth.currentUser.uid && data.reserved !== this.empty;
  }

  isSelected(item) {
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

  onSuccess() {
    this.logout();
    this.success = true;
    var timer = Observable.timer(6000);
    timer.subscribe(t => {
      this.success = false;
    });
  }

}
