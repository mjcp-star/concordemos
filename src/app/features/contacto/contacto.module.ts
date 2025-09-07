import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto.component';
const routes: Routes = [{ path: '', component: ContactoComponent }];
@NgModule({ declarations: [ContactoComponent], imports: [SharedModule, ReactiveFormsModule, RouterModule.forChild(routes)] })
export class ContactoModule {}
