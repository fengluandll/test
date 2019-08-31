import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "todo-list",
  template: `
  <h1>{{title}}</h1> <custom></custom>
  <div *ngFor="let todo of todos">
    <todo-item [todo]="todo" ></todo-item>
  </div>
  ` // the view
})
export class TodoListComponent { // the controller class
  todos = [{
    title: "todo1"
  },
  {
    title: "todo1"
  }]
}
