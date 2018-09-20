import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/tasks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  task: Task = {
    titulo: '',
    descricao: ''
  };

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.task.titulo != '' && this.task.descricao != '') {
      this.taskService.addTask(this.task);
      this.task.titulo = '';
      this.task.descricao = '';
    }
  }

}
