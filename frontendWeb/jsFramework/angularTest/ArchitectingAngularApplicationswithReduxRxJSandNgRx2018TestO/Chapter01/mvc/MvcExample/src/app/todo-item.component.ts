import { Component, Input } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "todo-item",
  template: `<h1>{{todo.title}}</h1>` // the view
})
export class TodoItemComponent {
  // the class
  @Input() todo;
}
