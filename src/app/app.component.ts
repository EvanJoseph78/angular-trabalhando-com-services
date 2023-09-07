import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Evandro</h1>
    <router-outlet></router-outlet>
    <hr />
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-trabalhando-com-services';
}
