import { Component } from "@angular/core";


@Component({
  template:'<h1>Hello World!</h1><p>From hello-world-component</p>',
  selector:'hello-world-app',
  styles:[`
      h1{
        color : green
      }
  `]
})

export class HelloWorldComponent{

}
