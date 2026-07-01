import { Routes } from '@angular/router';
import { adminRoutes } from './admin.route';
import { AdminLayout } from '../layouts/admin-layout/admin-layout';

export const routes: Routes = [
  // 1. Admin Area with its Layout
  {
    path: 'admin',
    component: AdminLayout,
    children: adminRoutes 
  },
  
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin/dashboard' }
];