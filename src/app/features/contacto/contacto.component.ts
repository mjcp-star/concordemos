import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  template: `
  <section class="section">
    <div class="container-page">
      <app-section-title eyebrow="Agendar" title="Contáctanos" subtitle="Cuéntanos tu caso y coordinamos tu cita"></app-section-title>
      <div class="grid md:grid-cols-2 gap-8">
        <form [formGroup]="form" (ngSubmit)="enviar()" class="card p-6 grid gap-4 bg-surface">
          <div class="grid md:grid-cols-2 gap-4">
            <input formControlName="nombre" placeholder="Nombre y apellido" class="rounded-xl border border-border px-4 py-3" />
            <input formControlName="telefono" placeholder="Teléfono/WhatsApp" class="rounded-xl border border-border px-4 py-3" />
          </div>
          <input formControlName="email" placeholder="Correo electrónico" class="rounded-xl border border-border px-4 py-3" />
          <select formControlName="tipo" class="rounded-xl border border-border px-4 py-3">
            <option value="">Tipo de caso</option>
            <option>Familiar</option>
            <option>Civil</option>
            <option>Laboral</option>
            <option>Empresarial</option>
          </select>
          <textarea formControlName="mensaje" rows="4" placeholder="Cuéntanos brevemente tu caso" class="rounded-xl border border-border px-4 py-3"></textarea>
          <div class="flex gap-3">
            <button class="btn-primary" [disabled]="form.invalid">Enviar (demo)</button>
            <a class="btn-outline" href="https://wa.me/51999999999" target="_blank" rel="noopener">WhatsApp</a>
          </div>
          <div *ngIf="enviado" class="text-sm text-secondary">¡Gracias! Registramos tu solicitud (modo demo). Te contactaremos pronto.</div>
        </form>
        <div class="grid gap-4">
          <div class="card p-0 overflow-hidden" style="height: 320px;">
            <iframe src="https://www.google.com/maps?q=Av.+Luis+Felipe+Villar%C3%A1n+222,+San+Isidro,+Lima,+Peru&z=16&output=embed" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <app-card>
            <h3 class="font-bold text-lg text-title">Canales</h3>
            <p class="text-muted">Lunes a sábado de 9:00 a 19:00.</p>
            <div class="mt-3 grid gap-2 text-sm">
              <div>📞 +51 999 999 999</div>
              <div>✉️ conciliemos@ejemplo.pe</div>
              <div>📍 Av. Luis Felipe Villarán 222, San Isidro, Lima</div>
            </div>
          </app-card>
        </div>
      </div>
    </div>
  </section>`
})
export class ContactoComponent {
  enviado=false;
  form=this.fb.group({ nombre:['',[Validators.required,Validators.minLength(3)]], telefono:['',[Validators.required,Validators.minLength(6)]], email:['',[Validators.email]], tipo:[''], mensaje:['',[Validators.required,Validators.minLength(10)]] });
  constructor(private fb: FormBuilder){}
  enviar(){ if(this.form.invalid) return; const items=JSON.parse(localStorage.getItem('contactos')||'[]'); items.push({...this.form.value, fecha:new Date().toISOString()}); localStorage.setItem('contactos', JSON.stringify(items)); this.enviado=true; this.form.reset(); }
}
