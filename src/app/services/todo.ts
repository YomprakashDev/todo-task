import { Injectable, signal } from '@angular/core';
import { TodoModel } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class Todo {

locationOfUrl =''
  taskList: TodoModel[] = []

  isAddOn = signal(false)

  toggelAddOn() {
    this.isAddOn.update((prv) => !prv)
  }

  onSubmitForm(taskName: string, taskSummary: string, required: boolean) {
    const newTask = {
      id: Math.round(Math.random() * 100),
      taskName: taskName,
      summary: taskSummary,
      required: required
    }
    this.taskList.push(newTask)

  }

  updateLocation(currentUrl:string){
    this.locationOfUrl = currentUrl
  }

  onDeleteTodo(id: number) {
    this.taskList = this.taskList.filter(todo => todo.id !== id)
  
  }
}
