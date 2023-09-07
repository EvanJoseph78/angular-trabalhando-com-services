import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Evandro</h1>
    <app-card></app-card>
    <hr />
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-trabalhando-com-services';
}
