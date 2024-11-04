import { Component } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  standalone: true,
  imports: [MdbCollapseModule],
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.scss'
})
export class NavbarAdminComponent {


  constructor(private router: Router) {}

  logout() {

    this.router.navigate(['/login']);
  }
}
