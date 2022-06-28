import { MaterialModule } from '../material.module';
import { PerformanceComponent } from './performance.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PerformanceComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [PerformanceComponent],
})
export class PerformanceModule {}
