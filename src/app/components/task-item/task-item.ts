import { Component, input, } from '@angular/core';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss'
})
export class TaskItem {
  taskName = input()
  taskSummary = input()
}
