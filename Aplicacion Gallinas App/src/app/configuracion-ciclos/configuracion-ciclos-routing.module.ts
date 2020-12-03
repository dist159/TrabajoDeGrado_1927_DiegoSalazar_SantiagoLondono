import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionCiclosPage } from './configuracion-ciclos.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionCiclosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionCiclosPageRoutingModule {}
