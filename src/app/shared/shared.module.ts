import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionTitleComponent } from './ui/section-title.component';
import { CardComponent } from './ui/card.component';
import { ButtonComponent } from './ui/button.component';
@NgModule({ declarations: [SectionTitleComponent, CardComponent, ButtonComponent], imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule], exports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, SectionTitleComponent, CardComponent, ButtonComponent] })
export class SharedModule {}
