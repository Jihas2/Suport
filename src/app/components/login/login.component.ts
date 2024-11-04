import { Component } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login realizado, redirecionando para a NavbarAdmin...');
    this.router.navigate(['/admin/navbar']).then(success => {
      if (success) {
        console.log('Redirecionamento bem-sucedido!');
      } else {
        console.error('Falha no redirecionamento.');
      }
    });
  }
}
