import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'customer-portal-test-login',
  templateUrl: './test-login.component.html',
  styleUrls: ['./test-login.component.scss']
})
export class TestLoginComponent{

  @Output() login = new EventEmitter();

}
