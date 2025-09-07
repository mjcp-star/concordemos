import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ServiciosComponent } from './servicios.component';
const routes: Routes = [{ path: '', component: ServiciosComponent }];
@NgModule({ declarations: [ServiciosComponent], imports: [SharedModule, RouterModule.forChild(routes)] })
export class ServiciosModule {}
