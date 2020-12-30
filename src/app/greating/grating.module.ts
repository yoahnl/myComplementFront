import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';
import {LandingComponent} from './landing/landing.component';
import {BrowserModule} from '@angular/platform-browser';
import {OnBoardingComponent} from './on-boarding/on-boarding.component';
import {RankingComponent} from './on-boarding/ranking/ranking.component';
import {SelectComponent} from './on-boarding/select/select.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, LandingComponent, OnBoardingComponent, RankingComponent, SelectComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    TabsPageRoutingModule,
  ]
})
export class GratingModule { }
