import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const servicoPermission = inject(LoginServiceService)
  const protectedRoutes =["admin/navbar", "admin/home", "admin/tecnicos", "admin/usuarios", "admin/tickets"];
  if(protectedRoutes.includes(state.url) && servicoPermission.hasPermission ("ADMIN")) {

return false

  }
  return true
};