import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      parent:'Main',
      folder:'Login',
      title: 'Login',
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      parent:'Main',
      folder:'Home',
      title: 'Home',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
