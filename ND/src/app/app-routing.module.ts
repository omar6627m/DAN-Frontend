import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth-section/login/login.component';
import { RegisterComponent } from './components/auth-section/register/register.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to the login page by default
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
