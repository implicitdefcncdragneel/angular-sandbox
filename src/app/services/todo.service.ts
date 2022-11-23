import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'http://127.0.0.1:8000/api/get-todo/';
  constructor(private http: HttpClient) {}
  gettodo() {
    return this.http.get(this.url);
  }
  addtodo(data: any) {
    return this.http.post(this.url, data);
  }
  deletetodo(id: any) {
    return this.http.delete(this.url + id + '/');
  }
}
