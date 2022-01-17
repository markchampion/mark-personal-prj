import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {MaterialModule} from '../../material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { GameGridComponent } from './game-grid/game-grid.component';
import {GameCollectionsModule} from './game-collections/game-collections.module';


@NgModule({
  declarations: [LoginComponent, GameGridComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: []
})
export class PublicModule { }
