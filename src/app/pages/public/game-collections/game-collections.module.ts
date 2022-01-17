import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointDiffColorComponent } from './point-diff-color/point-diff-color.component';
import {FacebookModule, FacebookService} from 'ngx-facebook';



@NgModule({
  declarations: [PointDiffColorComponent],
  imports: [
    CommonModule,
    FacebookModule
  ],
  providers: [
    FacebookService
  ]
})
export class GameCollectionsModule { }
