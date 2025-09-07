import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
@NgModule({ declarations: [NavbarComponent, FooterComponent], imports: [CommonModule, RouterModule], exports: [NavbarComponent, FooterComponent] })
export class CoreModule {}
