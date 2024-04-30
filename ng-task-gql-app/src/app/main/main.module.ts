import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
  ],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    NgbModule,
    NgbNavModule
  ]
})
export class MainModule { }
