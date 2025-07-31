import { Injectable, signal } from '@angular/core';
import { TodoModel } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class Todo {


  taskList: TodoModel[] = []
  routeOfPage:string = ''
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

  onToggleClass(id:number){
    const taskIndex = this.taskList.findIndex(task => task.id === id)
    if(taskIndex !== -1){
      this.taskList[taskIndex].required = !this.taskList[taskIndex].required
    }
  }

onUpdateRoute(route:string){
this.routeOfPage = route
}

  onDeleteTodo(id: number) {
    this.taskList = this.taskList.filter(todo => todo.id !== id)

  }

  
}
