import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public database: AngularFirestore) { }

  createItem<tipo>(data: tipo, enlace: string) {
    const ref  = this.database.collection<tipo>(enlace);
    return ref.add(data);
  }

}
