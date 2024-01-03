import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/landing-section/home-page/home-page.component';
import { FeedPageComponent } from './components/landing-section/feed-page/feed-page.component';
import {CausesPageComponent} from "./components/causes/causes-page/causes-page.component";
import {CauseDetailsPageComponent} from "./components/causes/cause-details-page/cause-details-page.component";
import {PostDetailsPageComponent} from "./components/post-details-page/post-details-page.component";
import {PostsDashboardPageComponent} from "./components/dashboard/posts-dashboard-page/posts-dashboard-page.component";
import {UsersDashboardPageComponent} from "./components/dashboard/users-dashboard-page/users-dashboard-page.component";
import {
  CausesDashboardPageComponent
} from "./components/dashboard/causes-dashboard-page/causes-dashboard-page.component";
import {
  DonationsDashboardPageComponent
} from "./components/dashboard/donations-dashboard-page/donations-dashboard-page.component";

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'}, // Redirect to the login page by default

  {path: 'home', component: HomePageComponent},

  {path: 'feed', component: FeedPageComponent},

  {path: 'feed/:id', component: PostDetailsPageComponent},

  {path: 'causes', component: CausesPageComponent},

  {path: 'causes/:id', component: CauseDetailsPageComponent},

  {path: 'dashboard/users', component: UsersDashboardPageComponent},

  {path: 'dashboard/posts', component: PostsDashboardPageComponent},

  {path: 'dashboard/causes', component: CausesDashboardPageComponent},

  {path: 'dashboard/donations', component: DonationsDashboardPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
