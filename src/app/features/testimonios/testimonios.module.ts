import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TestimoniosComponent } from './testimonios.component';
const routes: Routes = [{ path: '', component: TestimoniosComponent }];
@NgModule({ declarations: [TestimoniosComponent], imports: [SharedModule, RouterModule.forChild(routes)] })
export class TestimoniosModule {}
