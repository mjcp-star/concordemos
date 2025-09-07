import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ConciliadoresComponent } from './conciliadores.component';
const routes: Routes = [{ path: '', component: ConciliadoresComponent }];
@NgModule({ declarations: [ConciliadoresComponent], imports: [SharedModule, RouterModule.forChild(routes)] })
export class ConciliadoresModule {}
