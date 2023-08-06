import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
