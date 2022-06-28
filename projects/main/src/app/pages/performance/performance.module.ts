import { PerformanceModule } from '../../views/performance/performance.module';
import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PerformanceComponent],
  imports: [CommonModule, PerformanceRoutingModule, PerformanceModule],
})
export class AppPerformanceModule {}
