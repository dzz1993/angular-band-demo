import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入components
import {LoginComponent} from './components/login/login.component';
import {DetailComponent} from './components/detail/detail.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
