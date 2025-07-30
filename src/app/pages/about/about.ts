import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About  {

  todoService = inject(Todo)
  locationOfUrl = window.location.pathname


  constructor(){
    this.todoService.updateLocation(this.locationOfUrl)
  }

}
