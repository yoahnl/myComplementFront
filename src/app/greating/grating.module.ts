import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';
import {LandingComponent} from './landing/landing.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, LandingComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    TabsPageRoutingModule,
  ]
})
export class GratingModule { }
