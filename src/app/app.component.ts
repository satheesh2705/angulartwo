import { Component, Input } from '@angular/core';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Todo List';

  display = true;

  change(){
    this.display= !this.display;
  }

  data = [{name:'satheesh'}]

  public value : any = 15;
}

