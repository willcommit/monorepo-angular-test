import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TestLoginComponent } from './test-login/test-login.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavbarComponent,
    TestLoginComponent
  ],
  exports: [
    NavbarComponent,
    TestLoginComponent
  ],
})
export class SharedUiModule {}
