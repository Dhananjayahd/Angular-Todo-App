import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import {v4 as uuidv4} from 'uuid';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {

  todoTitle : string;

  constructor(private todoSrvice : TodoService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    if(this.todoTitle.length == 0){
      return this.toastr.info("Enter Todo Name!!")
    }else{
      const newTodo : Todo = {
        id : uuidv4(),
        title : this.todoTitle,
        isComplete : false,
        date : new Date()
      }
      this.todoSrvice.addTodo(newTodo);
      this.todoTitle = "";
    }
  }

}
