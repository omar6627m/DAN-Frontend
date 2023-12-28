import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
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
    DonationSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ,
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
