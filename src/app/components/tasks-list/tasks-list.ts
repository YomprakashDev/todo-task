import { Component, inject, signal, } from '@angular/core';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-tasks-list',
  imports: [],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.scss'
})
export class TasksList {

  todoService = inject(Todo);
  taskList = this.todoService.taskList
  onDeleteTodo(id:number){
    console.log(id)
    this.todoService.onDeleteTodo(id);
    this.taskList = this.todoService.taskList;
  }

  onToggleClass(id:number){
    
    this.todoService.onToggleClass(id)
    this.taskList = this.todoService.taskList
  }

}
