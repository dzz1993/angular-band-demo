/*
* 把app.module里面的模块拿到core.module.ts里面
* */
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {ToastrModule} from 'ngx-toastr';
import {ServiceModule} from '../service/service.module';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ServiceModule
  ],
  exports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule,
  ]
})
export class CoreModule { }
