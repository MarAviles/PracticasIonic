import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { PerfilPage } from '../perfil/perfil.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PerfilPageModule } from '../perfil/perfil.module';

@NgModule({
  entryComponents:[
    PerfilPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    PerfilPageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
