import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'conciliadores', loadChildren: () => import('./features/conciliadores/conciliadores.module').then(m => m.ConciliadoresModule) },
  { path: 'servicios', loadChildren: () => import('./features/servicios/servicios.module').then(m => m.ServiciosModule) },
  { path: 'testimonios', loadChildren: () => import('./features/testimonios/testimonios.module').then(m => m.TestimoniosModule) },
  { path: 'contacto', loadChildren: () => import('./features/contacto/contacto.module').then(m => m.ContactoModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({ imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})], exports: [RouterModule] })
export class AppRoutingModule {}
