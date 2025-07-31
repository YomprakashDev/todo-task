import { Component, inject } from '@angular/core';
import { Todo } from '../../services/todo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  todoService = inject(Todo)
  isAddOn = this.todoService.isAddOn
  currentRoute = this.todoService.routeOfPage

  constructor(private route: Router) { }

  toggelAddOn() {
    this.todoService.toggelAddOn()
  }

  hasRoute(route: string) {
    return this.route.url === '/'
  }

}
