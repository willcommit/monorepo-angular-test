import { Component } from '@angular/core';

@Component({
  selector: 'customer-portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  authenticated = false;

  title = 'invoice-app';

  onLogin() {
    this.authenticated = true;
  }


}
