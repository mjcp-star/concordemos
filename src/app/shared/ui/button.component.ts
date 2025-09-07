import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-button',
  template: `<a [routerLink]="routerLink" *ngIf="routerLink" class="btn-primary"><ng-content></ng-content></a><button *ngIf="!routerLink" class="btn-primary" (click)="onClick?.()"><ng-content></ng-content></button>`
})
export class ButtonComponent { @Input() routerLink?: string | any[]; @Input() onClick?: () => void; }
