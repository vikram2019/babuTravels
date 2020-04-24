import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { RegistrationComponent } from './registration/registration.component';
import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    RouterModule
  ],
  exports: [ LayoutModule, RegistrationComponent ]
})
export class ModulesModule { }
