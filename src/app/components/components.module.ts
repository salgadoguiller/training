import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    BannerComponent,
    NavbarComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    NavbarComponent,
    CardComponent,
  ]
})
export class ComponentsModule { }
