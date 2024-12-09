import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaTecnicoComponent } from './lista-tecnico/lista-tecnico.component';
import { LoginComponent } from './components/login/login.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminListaTecnicoComponent } from './components/admin-lista-tecnico/admin-lista-tecnico.component';
import { AdminListaUsuarioComponent } from './components/admin-lista-usuario/admin-lista-usuario.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AdminTicketsComponent } from './components/admin-tickets/admin-tickets.component';
import { guardGuard } from './guard/guard.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'tecnicos', component: ListaTecnicoComponent },
    { path: 'usuarios', component: ListaUsuarioComponent },
    { path: 'tickets', component: TicketsComponent },
    { path: 'admin/navbar', component: NavbarAdminComponent, canActivate:[guardGuard]},
        { path: 'admin/home', component: AdminHomeComponent, canActivate:[guardGuard]},
        { path: 'admin/tecnicos', component: AdminListaTecnicoComponent, canActivate:[guardGuard]},
        { path: 'admin/usuarios', component: AdminListaUsuarioComponent, canActivate:[guardGuard]},
        { path: 'admin/tickets', component: AdminTicketsComponent, canActivate:[guardGuard]}

];  