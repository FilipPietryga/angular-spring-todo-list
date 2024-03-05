import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from './service/task-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TaskService, HttpClient]
})
export class AppComponent {
  title = 'Welcome to Angular-Spring Todo List Application (im sorry...)';
}
