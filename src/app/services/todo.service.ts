import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos : Todo[];

  constructor() {
    this.todos = [
      {
        id:'111',
        title:'Learn C++',
        isComplete:true,
        date:new Date()
      },
      {
        id:'222',
        title:'Learn React',
        isComplete:true,
        date:new Date()
      },
      {
        id:'333',
        title:'Learn Angular',
        isComplete:false,
        date:new Date()
      }
    ];
  }

  getTodos(){
    return of(this.todos);
  }

  addTodo(todo : Todo){
    this.todos.push(todo)
  }

  changeStatus(todo : Todo){
    this.todos.forEach(singleTodo => {
      if(singleTodo.id == todo.id){
        singleTodo.isComplete = !singleTodo.isComplete;
      }
    })
  }

  deleteTodo(todo : Todo){
    let index;
    this.todos.forEach((sTodo,ind)=>{
      if(todo.id == sTodo.id){
        index = ind;
      }
    })
    this.todos.splice(index,1);
  }
}
