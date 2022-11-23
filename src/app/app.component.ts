import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cnc-sandbox';
  list: any;
  todoValue: any;

  ngOnInit() {
    this.list = [];
    this.todoValue = '';
  }

  constructor(private todo: TodoService) {
    this.getItem();
  }
  getItem() {
    this.todo.gettodo().subscribe((data) => {
      this.list = data;
    });
  }
  addItem(data: any) {
    if (this.todoValue !== '') {
      data = { value: data };
      this.todo.addtodo(data).subscribe((result) => {
        this.list.push(result);
      });
    }
    this.todoValue = '';
  }
  deleteItem(id: number) {
    this.todo.deletetodo(id).subscribe(() => this.getItem());
  }
}
