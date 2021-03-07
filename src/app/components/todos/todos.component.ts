import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../models/Todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos : Todo[];
  faTrashAlt = faTrashAlt;
  
  constructor(private todoService : TodoService) { 

  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos)=>{
      this.todos = todos;
    })
  }

  changeTodoStatus(todo : Todo){
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo : Todo){
    this.todoService.deleteTodo(todo);
  }

}
