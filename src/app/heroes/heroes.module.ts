import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    HeroComponent,
  ],
  declarations: [
    ListComponent,
    HeroComponent,
  ],
  providers: [],
})
export class HeroesModule { }
