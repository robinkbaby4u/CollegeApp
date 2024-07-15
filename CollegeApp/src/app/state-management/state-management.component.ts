import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../task.reducer';
import { addTask, updateTask, deleteTask }  from '../task.actions';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-state-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state-management.component.html',
  styleUrl: './state-management.component.scss'
})
export class StateManagementComponent {
  tasks: Task[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select('tasks').subscribe(tasks => this.tasks = tasks);
  }

  addNewTask() {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: 'New Task',
      description: 'This is a new task.'
    };
    this.store.dispatch(addTask({ task: newTask }));
  }

  updateTask(task: Task) {
    const updatedTask: Task = { ...task, title: 'Updated Task', description: 'This task has been updated.' };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }
}
