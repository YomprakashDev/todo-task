import { Component, inject, signal } from '@angular/core';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  todoService = inject(Todo)
  isAddOn = this.todoService.isAddOn

  toggelAddOn() {
    this.todoService.toggelAddOn()
  }

}
