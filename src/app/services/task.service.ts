import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Task } from '../models/tasks';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;
  taskDoc: AngularFirestoreDocument<Task>;

  constructor(public afs: AngularFirestore) {
    this.tasks = this.afs.collection('tasks').valueChanges();
  }

  getTasks() {
    return this.tasks;
  }
}

