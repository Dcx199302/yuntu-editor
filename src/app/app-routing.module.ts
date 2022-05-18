import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoLayoutComponent } from './a-demo/demo-layout.component';
import { ViewComponent } from './views/view.component';

const routes: Routes = [
  {
    path: 'yuntu',
    component: ViewComponent,
  },
  {
    path: 'demo',
    component: DemoLayoutComponent,
  },
  {
    path: '**',
    redirectTo: 'demo',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
