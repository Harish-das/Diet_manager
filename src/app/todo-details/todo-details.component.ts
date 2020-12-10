import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  tododetails
  manager:any;
  constructor(private b:TodoService) { }

  ngOnInit(): void {
    this.tododetails=this.b.TodoList;
    this.manager=this.b.manager;
  }

}
