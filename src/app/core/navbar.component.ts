import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  template: `
  <header class="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-border">
    <div class="container-page h-16 flex items-center justify-between gap-4">
      <a routerLink="/" class="flex items-center gap-3">
        <div class="h-9 w-9 rounded-lg bg-primary grid place-items-center text-white font-extrabold">C</div>
        <span class="font-extrabold text-title">Concordemos</span>
      </a>
      <nav class="hidden md:flex items-center gap-6">
        <a routerLink="/" routerLinkActive="text-title" class="nav-link">Inicio</a>
        <a routerLink="/conciliadores" routerLinkActive="text-title" class="nav-link">Conciliadores</a>
        <a routerLink="/contacto" routerLinkActive="text-title" class="nav-link">Contacto</a>
        <a routerLink="/testimonios" routerLinkActive="text-title" class="nav-link">Testimonios</a>
        <a routerLink="/servicios" routerLinkActive="text-title" class="nav-link">Servicios</a>
        <a routerLink="/contacto" class="btn-primary text-sm px-4 py-2">Agendar</a>
      </nav>
      <button class="md:hidden btn-outline text-sm px-3 py-1" (click)="open = !open">Menú</button>
    </div>
    <div *ngIf="open" class="md:hidden border-t border-border bg-surface">
      <div class="container-page py-3 grid gap-2">
        <a routerLink="/" (click)="open=false" class="nav-link">Inicio</a>
        <a routerLink="/conciliadores" (click)="open=false" class="nav-link">Conciliadores</a>
        <a routerLink="/contacto" (click)="open=false" class="nav-link">Contacto</a>
        <a routerLink="/testimonios" (click)="open=false" class="nav-link">Testimonios</a>
        <a routerLink="/servicios" (click)="open=false" class="nav-link">Servicios</a>
      </div>
    </div>
  </header>`
})
export class NavbarComponent { open = false; }
