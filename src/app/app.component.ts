import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoValue: any;
  constructor(private todo: TodoService) {
    this.todo.gettodo().subscribe((data) => {
      this.todoValue = data;
    });
    this.list = [];
  }

  title = 'cnc-sandbox';
  list: Todo[];

  // ngOnInit() {
  //   this.list = [];
  //   this.todoValue = '';
  // }

  // addItem() {
  //   if (this.todoValue !== '') {
  //     const newItem: Todo = {
  //       id: Date.now(),
  //       value: this.todoValue,
  //       isDone: false,
  //     };
  //     this.list.push(newItem);
  //   }
  //   this.todoValue = '';
  // }

  // deleteItem(id: number) {
  //   this.list = this.list.filter((item) => item.id !== id);
  // }
}
