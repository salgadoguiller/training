import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    BannerComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    NavbarComponent,
  ]
})
export class ComponentsModule { }
