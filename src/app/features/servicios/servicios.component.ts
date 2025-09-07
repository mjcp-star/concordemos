import { Component } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Servicio } from '../../shared/models';
@Component({
  selector: 'app-servicios',
  template: `
  <section class="section">
    <div class="container-page">
      <app-section-title eyebrow="Qué hacemos" title="Servicios de conciliación" subtitle="Presencial y virtual en todo el Perú"></app-section-title>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <app-card *ngFor="let s of servicios">
          <div class="text-3xl">{{s.icono}}</div>
          <h3 class="mt-3 font-bold text-lg text-title">{{s.nombre}}</h3>
          <p class="text-muted">{{s.descripcion}}</p>
          <div class="mt-4 flex gap-3">
            <a class="btn-primary" routerLink="/contacto">Solicitar</a>
            <a class="btn-outline" routerLink="/testimonios">Ver casos</a>
          </div>
        </app-card>
      </div>
    </div>
  </section>`
})
export class ServiciosComponent { servicios: Servicio[]=[]; constructor(data: DataService){ this.servicios=data.getServicios(); } }
