import { Component, inject} from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { LoginServiceService } from '../../services/login-service.service';
import { Login } from '../../models/login';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginService = inject(LoginServiceService)
router = inject(Router);

 login:Login = new Login("","");


  logar() {

  this.loginService.logar(this.login).subscribe({

next: token => {
this.loginService.addToken(token);
  this.router.navigate(['admin/navbar'])

},
error: erro =>{

console.log("deu ruim") 

},

  })
    
}
 }
