import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Testimonio } from '../../shared/models';
@Component({
  selector: 'app-testimonios',
  template: `
  <section class="section">
    <div class="container-page">
      <app-section-title eyebrow="Resultados reales" title="Testimonios" subtitle="Historias de acuerdos justos y rápidos"></app-section-title>
      <div class="relative overflow-hidden">
        <div class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4" style="scrollbar-width: none;">
          <div *ngFor="let t of testimonios" class="snap-center min-w-[320px] max-w-md card p-6">
            <div class="text-xl text-title">“{{t.texto}}”</div>
            <div class="mt-4 text-sm text-muted">— {{t.nombre}} • {{t.ambito}}</div>
          </div>
        </div>
        <div class="text-center mt-6"><a routerLink="/contacto" class="btn-primary">Quiero mi acuerdo</a></div>
      </div>
    </div>
  </section>`
})
export class TestimoniosComponent implements OnInit, OnDestroy {
  testimonios: Testimonio[]=[]; interval:any;
  constructor(private data: DataService){}
  ngOnInit(){ this.testimonios=this.data.getTestimonios(); this.interval=setInterval(()=>{ const el=document.querySelector('.overflow-x-auto') as HTMLElement|null; if(!el)return; el.scrollBy({left:340,behavior:'smooth'}); if(el.scrollLeft+el.clientWidth>=el.scrollWidth-10) el.scrollTo({left:0,behavior:'smooth'}); },4000); }
  ngOnDestroy(){ if(this.interval) clearInterval(this.interval); }
}
