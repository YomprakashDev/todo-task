import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todo } from '../../services/todo';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {


  todoService = inject(Todo)
  constructor(private route: ActivatedRoute) { }

  
}
