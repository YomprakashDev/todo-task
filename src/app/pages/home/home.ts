import { Component, inject, signal } from '@angular/core';
import { AddTaskForm } from "../../components/add-task-form/add-task-form";
import { TasksList } from '../../components/tasks-list/tasks-list';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-home',
  imports: [AddTaskForm, TasksList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  todoService = inject(Todo)
  isAddOn = this.todoService.isAddOn


}
