import { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  template: `
  <footer class="mt-24 border-t border-border bg-surface">
    <div class="container-page py-10 grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <div class="h-9 w-9 rounded-lg bg-primary grid place-items-center text-white font-extrabold">C</div>
          <div>
            <div class="text-title font-extrabold leading-4">Concordemos</div>
            <div class="text-[10px] text-muted -mt-1">Centro de Conciliación</div>
          </div>
        </div>
        <p class="text-muted">Acuerdos rápidos, legales y humanos. Presencial y virtual.</p>
      </div>
      <div>
        <div class="font-semibold mb-3 text-title">Enlaces</div>
        <div class="grid gap-2">
          <a routerLink="/" class="nav-link">Inicio</a>
          <a routerLink="/conciliadores" class="nav-link">Conciliadores</a>
          <a routerLink="/servicios" class="nav-link">Servicios</a>
          <a routerLink="/testimonios" class="nav-link">Testimonios</a>
          <a routerLink="/contacto" class="nav-link">Contacto</a>
        </div>
      </div>
      <div>
        <div class="font-semibold mb-3 text-title">Contacto</div>
        <div class="grid gap-2 text-muted">
          <div>Av. Luis Felipe Villarán 222, San Isidro, Lima</div>
          <div>concordemos@ejemplo.pe</div>
          <div>+51 999 999 999</div>
        </div>
      </div>
    </div>
    <div class="border-t border-border text-center text-xs text-muted py-4">© {{year}} Concordemos. Todos los derechos reservados.</div>
  </footer>`
})
export class FooterComponent { year = new Date().getFullYear(); }
