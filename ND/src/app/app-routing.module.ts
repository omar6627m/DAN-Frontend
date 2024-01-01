import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth-section/login/login.component';
import { RegisterComponent } from './components/auth-section/register/register.component';
import { HomePageComponent } from './components/landing-section/home-page/home-page.component';
import { FeedPageComponent } from './components/landing-section/feed-page/feed-page.component';
import {CausesPageComponent} from "./components/causes/causes-page/causes-page.component";
import {CauseDetailsPageComponent} from "./components/causes/cause-details-page/cause-details-page.component";

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to the login page by default

  { path: 'home', component: HomePageComponent },

  { path: 'feed', component: FeedPageComponent },

  { path: 'causes', component: CausesPageComponent },

  { path: 'causes/:id', component: CauseDetailsPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
