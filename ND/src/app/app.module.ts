import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, provideHttpClient, withJsonpSupport} from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { CommunitySectionComponent } from './components/community-section/community-section.component';
import { GuidelineSectionComponent } from './components/guideline-section/guideline-section.component';
import { FeedPageComponent } from './components/landing-section/feed-page/feed-page.component';
import { HomePageComponent } from './components/landing-section/home-page/home-page.component';
import { LoginComponent } from './components/auth-section/login/login.component';
import { RegisterComponent } from './components/auth-section/register/register.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './shared/button/button.component';
import { DonationSectionComponent } from './components/donation-section/donation-section.component';
import {GoogleMapsModule} from "@angular/google-maps";
import { CauseCardComponent } from './shared/cause-card/cause-card.component';
import { ArrowLinkComponent } from './shared/arrow-link/arrow-link.component';
import { PostCardComponent } from './shared/post-card/post-card.component';
import { ModalComponent } from './shared/modal/modal.component';
import { CausesPageComponent } from './components/causes/causes-page/causes-page.component';
import { CauseDetailsPageComponent } from './components/causes/cause-details-page/cause-details-page.component';
import { MapComponent } from './shared/map/map.component';
import { PostDetailsPageComponent } from './components/post-details-page/post-details-page.component';
import { CommentComponent } from './shared/comment/comment.component';
import { GenericDashboardPageComponent } from './components/dashboard/generic-dashboard-page/generic-dashboard-page.component';
import { MinimalHeaderComponent } from './shared/minimal-header/minimal-header.component';
import { DashboardSideNavComponent } from './components/dashboard/dashboard-side-nav/dashboard-side-nav.component';
import { PostsDashboardPageComponent } from './components/dashboard/posts-dashboard-page/posts-dashboard-page.component';
import { CausesDashboardPageComponent } from './components/dashboard/causes-dashboard-page/causes-dashboard-page.component';
import { DonationsDashboardPageComponent } from './components/dashboard/donations-dashboard-page/donations-dashboard-page.component';
import { UsersDashboardPageComponent } from './components/dashboard/users-dashboard-page/users-dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewsSectionComponent,
    CommunitySectionComponent,
    GuidelineSectionComponent,
    FeedPageComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DonationSectionComponent,
    StatisticsComponent,
    HeroComponent,
    ButtonComponent,
    DonationSectionComponent,
    CauseCardComponent,
    ArrowLinkComponent,
    PostCardComponent,
    ModalComponent,
    CausesPageComponent,
    CauseDetailsPageComponent,
    MapComponent,
    PostDetailsPageComponent,
    CommentComponent,
    GenericDashboardPageComponent,
    MinimalHeaderComponent,
    DashboardSideNavComponent,
    PostsDashboardPageComponent,
    CausesDashboardPageComponent,
    DonationsDashboardPageComponent,
    UsersDashboardPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule,


  ],
  providers: [provideHttpClient(withJsonpSupport())],
  bootstrap: [AppComponent]
})
export class AppModule { }
