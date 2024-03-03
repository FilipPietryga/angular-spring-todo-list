import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'addTasks', component: TaskFormComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
