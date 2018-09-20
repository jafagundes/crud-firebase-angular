import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/tasks';
import { TaskService } from '../../services/task.service';
import { compilePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  editState: boolean = false;
  taskEdit: Task;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(task) {
    const response = confirm("Deseja remover a " + task.titulo);
    if(response) {
      this.taskService.deleteTask(task);
    }
    return;
  }

  editTask(task) {
    this.editState = !this.editState;
    this.taskEdit = task;
  }

  updateTask(task) {
    this.taskService.updateTask(task);
    this.editState = false;
  }

}
