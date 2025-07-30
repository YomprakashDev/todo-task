import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-add-task-form',
  imports: [FormsModule],
  templateUrl: './add-task-form.html',
  styleUrl: './add-task-form.scss'
})
export class AddTaskForm {

  taskName = signal<string>('')
  taskSummary = signal<string>('')
  reminder = signal(false)

  todoService = inject(Todo)


  onSubmitForm() {
    if (this.taskName().trim() !== '' || this.taskSummary().trim() !== '') {
      this.todoService.onSubmitForm(this.taskName(), this.taskSummary(), this.reminder())
      this.taskName.set('')
      this.taskSummary.set('')
      this.reminder.set(false)
    }

  }
}
