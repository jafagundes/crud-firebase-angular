import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Task } from '../models/tasks';
import { Observable } from 'rxjs/internal/Observable'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;
  taskDoc: AngularFirestoreDocument<Task>;

  constructor(public afs: AngularFirestore) {
    this.tasksCollection = this.afs.collection('tasks', ref => ref.orderBy('titulo','asc'));

    this.tasks = this.tasksCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Task;
        data.id = a.payload.doc.id;
        return data;
      });
}));
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task){
    this.tasksCollection.add(task);
  }

}

