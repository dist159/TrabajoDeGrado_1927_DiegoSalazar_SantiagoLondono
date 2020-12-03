import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionCiclosPageRoutingModule } from './configuracion-ciclos-routing.module';

import { ConfiguracionCiclosPage } from './configuracion-ciclos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionCiclosPageRoutingModule
  ],
  declarations: [ConfiguracionCiclosPage]
})
export class ConfiguracionCiclosPageModule {}
