import { AppHomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.AppHomeModule) },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then((m) => m.AppContactModule),
  },
  {
    path: 'performance',
    loadChildren: () =>
      import('./pages/performance/performance.module').then((m) => m.AppPerformanceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
