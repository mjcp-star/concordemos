import { Component } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Conciliador } from '../../shared/models';
@Component({
  selector: 'app-conciliadores',
  template: `
  <section class="section">
    <div class="container-page">
      <app-section-title eyebrow="Equipo" title="Nuestros conciliadores" subtitle="Profesionales acreditados y empáticos"></app-section-title>
      <div class="card p-4 mb-6 grid md:grid-cols-3 gap-4 bg-surface">
        <input [(ngModel)]="query" placeholder="Buscar por nombre..." class="w-full rounded-xl border border-border px-4 py-3 outline-none" />
        <select [(ngModel)]="especialidad" class="w-full rounded-xl border border-border px-4 py-3">
          <option value="">Todas las especialidades</option>
          <option>Familiar</option>
          <option>Civil</option>
          <option>Laboral</option>
          <option>Empresarial</option>
        </select>
        <button class="btn-outline" (click)="limpiar()">Limpiar filtros</button>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <app-card *ngFor="let c of filtrados">
          <div class="flex items-center gap-4">
            <img [src]="c.foto" [alt]="c.nombre" class="h-16 w-16 rounded-xl object-cover border border-border" />
            <div>
              <div class="font-bold text-title">{{c.nombre}}</div>
              <div class="text-xs text-muted">{{c.colegiatura}} • {{c.experiencia}} años</div>
              <div class="badge mt-1">{{c.especialidad}}</div>
            </div>
          </div>
          <p class="text-muted mt-4">{{c.resumen}}</p>
          <div class="mt-4 flex gap-3">
            <a class="btn-primary" routerLink="/contacto">Agendar</a>
            <a class="btn-outline" href="https://wa.me/51999999999" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </app-card>
      </div>
    </div>
  </section>`
})
export class ConciliadoresComponent {
  query=''; especialidad=''; lista: Conciliador[]=[];
  constructor(data: DataService){ this.lista = data.getConciliadores(); }
  get filtrados(){ return this.lista.filter(c => (this.especialidad? c.especialidad===this.especialidad : true) && (this.query? c.nombre.toLowerCase().includes(this.query.toLowerCase()):true)); }
  limpiar(){ this.query=''; this.especialidad=''; }
}
