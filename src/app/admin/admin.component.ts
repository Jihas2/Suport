import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarAdminComponent } from '../navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, NavbarAdminComponent],
  template: `
    <app-navbar-admin></app-navbar-admin>
    <router-outlet></router-outlet>
  `,
})
export class AdminComponent {

}
