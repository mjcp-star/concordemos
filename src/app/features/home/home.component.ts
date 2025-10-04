import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="pt-24 pb-16 hero-wrap hero-video">
    <div class="bg-layer">
      <video #bgVideo
             class="bg-video"
             autoplay
             muted
             loop
             playsinline
             preload="auto"
             poster="assets/hero/video/concordemos-hero.jpg"
             (canplay)="onCanPlay()"
             (ended)="onEnded()"
             (pause)="onPause()"
             (stalled)="onStalled()"
             (waiting)="onWaiting()"
             (error)="onError($event)">
        <source src="assets/hero/video/PixVerse_V5_Image_Text_360P_crea_y_adjuntame_u-2.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- Contenido -->
    <div class="container-page grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div>
        <div class="badge">Centro de Conciliación</div>
        <h1 class="mt-3 text-5xl font-extrabold leading-tight text-white drop-shadow">
          Resolución de conflictos sin juicio
        </h1>
        <p class="text-white/90 mt-4 max-w-xl">
          Promovemos acuerdos rápidos, legales y duraderos en familia, civil, laboral y empresarial.
        </p>
        <div class="mt-6 flex gap-3">
          <a class="btn-primary" routerLink="/contacto" title="Agendar una cita">Agendar cita</a>
          <a class="btn-outline bg-white/10 border-white/60 text-white hover:opacity-90"
             routerLink="/servicios" title="Ver servicios">Ver servicios</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-surfaceMuted">
    <div class="container-page grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 class="text-title text-4xl font-extrabold mb-4">
          ¿Qué es un centro de conciliación extrajudicial?
        </h2>
      </div>
      <div class="text-muted">
        Un centro de conciliación facilita la resolución amigable de conflictos legales
        mediante métodos alternativos, promoviendo acuerdos justos y rápidos sin
        necesidad de acudir a la vía judicial.
      </div>

      <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div class="rounded-2xl overflow-hidden shadow-soft border border-border w-full aspect-[4/3]">
          <img src="assets/gallery/conciliacion-1.jpg" alt="Descripción 1" class="w-full h-full object-cover" loading="lazy" />
        </div>
        <div class="rounded-2xl overflow-hidden shadow-soft border border-border w-full aspect-[4/3]">
          <img src="assets/gallery/conciliacion-2.jpg" alt="Descripción 2" class="w-full h-full object-cover" loading="lazy" />
        </div>
        <div class="rounded-2xl overflow-hidden shadow-soft border border-border w-full aspect-[4/3]">
          <img src="assets/gallery/conciliacion-3.jpg" alt="Descripción 3" class="w-full h-full object-cover" loading="lazy" />
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
export class HomeComponent implements AfterViewInit {
  @ViewChild('bgVideo', { static: true }) videoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const v = this.videoRef.nativeElement;
    v.muted = true;
    v.playsInline = true;
    v.playbackRate = 1;
    this.tryPlay();

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) this.tryPlay();
    });
  }

  private tryPlay() {
    const v = this.videoRef.nativeElement;
    const play = () => v.play().catch(() => setTimeout(play, 300));
    play();
  }

  onCanPlay()  { this.tryPlay(); }
  onEnded()    { const v = this.videoRef.nativeElement; v.currentTime = 0; this.tryPlay(); }
  onPause()    { this.tryPlay(); }
  onStalled()  { const v = this.videoRef.nativeElement; v.load(); this.tryPlay(); }
  onWaiting()  { this.tryPlay(); }
  onError(e: Event) { console.error('❌ Video error', e); }
}
