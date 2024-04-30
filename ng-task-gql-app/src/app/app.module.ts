import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { JoyrideModule } from 'ngx-joyride';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, Injector} from '@angular/core';
import { DecimalPipe, CurrencyPipe } from '@angular/common';















@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JoyrideModule.forRoot(),
    SweetAlert2Module.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [

    DecimalPipe, 
    CurrencyPipe,
  
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {


  


 }
