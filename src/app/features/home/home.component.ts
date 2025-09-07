import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  template: `
  <section class="pt-24 pb-16 hero-wrap">
    <div class="container-page grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div class="badge">Centro de Conciliación</div>
        <h1 class="mt-3 text-5xl font-extrabold leading-tight text-title">Resolución de conflictos sin juicio</h1>
        <p class="text-muted mt-4 max-w-xl">Promovemos acuerdos rápidos, legales y duraderos en familia, civil, laboral y empresarial.</p>
        <div class="mt-6 flex gap-3">
          <a class="btn-primary" routerLink="/contacto" title="Agendar una cita">
            Agendar cita
          </a>

          <a class="btn-outline" routerLink="/servicios" title="Ver servicios">
            Ver servicios
          </a>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <img src="assets/tiles/1.jpg" class="rounded-xl shadow-soft border border-border" alt="Sala de conciliación">
        <img src="assets/tiles/2.jpg" class="rounded-xl shadow-soft border border-border" alt="Acuerdo">
        <img src="assets/tiles/3.jpg" class="rounded-xl shadow-soft border border-border" alt="Etapas de mediación">
      </div>
    </div>
  </section>

  <section class="section bg-surfaceMuted">
    <div class="container-page grid md:grid-cols-2 gap-10 items-start">
      <!-- Columna izquierda: título -->
      <div>
        <h2 class="text-title text-4xl font-extrabold mb-4">
          ¿Qué es un centro de conciliación extrajudicial?
        </h2>
      </div>

      <!-- Columna derecha: texto -->
      <div class="text-muted">
        Un centro de conciliación facilita la resolución amigable de conflictos legales
        mediante métodos alternativos, promoviendo acuerdos justos y rápidos sin
        necesidad de acudir a la vía judicial.
      </div>

      <!-- Galería: se alinea justo debajo y ocupa el ancho de ambas columnas -->
      <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <!-- Tarjeta de imagen 1 -->
        <div class="rounded-2xl overflow-hidden shadow-soft border border-border w-full aspect-[4/3]">
          <img src="assets/gallery/conciliacion-1.jpg"
              alt="Descripción 1"
              class="w-full h-full object-cover"
              loading="lazy" />
        </div>

        <!-- Tarjeta de imagen 2 -->
        <div class="rounded-2xl overflow-hidden shadow-soft border border-border w-full aspect-[4/3]">
          <img src="assets/gallery/conciliacion-2.jpg"
              alt="Descripción 2"
              class="w-full h-full object-cover"
              loading="lazy" />
        </div>

        <!-- Tarjeta de imagen 3 -->
        <div class="rounded-2xl overflow-hidden shadow-soft border border-border w-full aspect-[4/3]">
          <img src="assets/gallery/conciliacion-3.jpg"
              alt="Descripción 3"
              class="w-full h-full object-cover"
              loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-page">
      <div class="grid md:grid-cols-3 gap-6">
        <app-card><div class="text-3xl font-extrabold text-title">48h</div><div class="text-sm text-muted">Tiempo promedio de cita</div></app-card>
        <app-card><div class="text-3xl font-extrabold text-title">95%</div><div class="text-sm text-muted">Casos con acuerdo</div></app-card>
        <app-card><div class="text-3xl font-extrabold text-title">+1,200</div><div class="text-sm text-muted">Familias y empresas</div></app-card>
      </div>
      <div class="card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
        <div><h3 class="text-2xl font-extrabold text-title">¿Listo para resolver tu caso?</h3><p class="text-muted">Agenda una sesión de evaluación sin costo.</p></div>
        <div class="flex gap-3"><app-button routerLink="/contacto">Agendar ahora</app-button><a class="btn-outline" href="https://wa.me/51999999999" target="_blank" rel="noopener">WhatsApp</a></div>
      </div>
    </div>
  </section>
  `
})
export class HomeComponent {}
