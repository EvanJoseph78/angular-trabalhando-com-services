import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-card></app-card>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-trabalhando-com-services';
}
