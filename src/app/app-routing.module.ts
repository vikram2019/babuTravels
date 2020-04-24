import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './modules/registration/registration.component';
import { DemoComponent } from './demo/demo.component';



const routes: Routes = [
  { path: 'registerUser', component:  RegistrationComponent},
  { path: '',  redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'demo', component:  DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
