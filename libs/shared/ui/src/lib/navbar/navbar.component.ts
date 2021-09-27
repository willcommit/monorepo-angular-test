import { Component, Input } from '@angular/core';

@Component({
  selector: 'customer-portal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() authenticated!: boolean;

}
