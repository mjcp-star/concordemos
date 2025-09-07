import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-section-title',
  template: `<div class="mb-10"><div class="badge mb-3" *ngIf="eyebrow">{{eyebrow}}</div><h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-title">{{title}}</h2><p class="text-muted mt-3 max-w-2xl" *ngIf="subtitle">{{subtitle}}</p></div>`
})
export class SectionTitleComponent { @Input() title=''; @Input() subtitle?: string; @Input() eyebrow?: string; }
