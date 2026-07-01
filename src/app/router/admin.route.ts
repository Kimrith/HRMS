import { Routes } from '@angular/router';
import { Dashboard } from '../modules/admin/dashboard/dashboard';
import { Users } from '../modules/admin/users/users';
import { Roles } from '../modules/admin/roles/roles';
import { Departments } from '../modules/admin/departments/departments';

export const adminRoutes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'users',
    component: Users
  },
  {
    path: 'roles',
    component: Roles
  },
  {
    path: 'departments',
    component: Departments
  }
];