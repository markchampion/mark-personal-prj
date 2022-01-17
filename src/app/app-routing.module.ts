import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/public/login/login.component';
import {GameGridComponent} from './pages/public/game-grid/game-grid.component';
import {PointDiffColorComponent} from "./pages/public/game-collections/point-diff-color/point-diff-color.component";

const routes: Routes = [
  {
    path: 'home',
    component: GameGridComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'game',
    component: PointDiffColorComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
