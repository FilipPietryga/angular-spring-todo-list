import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../service/task-service.service';
import { Task } from '../../model/task';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class TaskFormComponent {

  task: Task;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private taskService: TaskService) {
    this.task = new Task();
  }

  onSubmit() {
    this.taskService.save(this.task).subscribe(_result => {
      console.log(_result)
    });
  }

  gotoTaskList() {
    this.router.navigate(['/tasks']);
  }
}
