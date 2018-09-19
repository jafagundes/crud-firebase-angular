import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Observable<Task[]>;
  constructor() { }
}

