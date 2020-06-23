import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { EconomyComponent } from './economy/economy.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { WelcomeComponent } from './welcome/welcome.component';
import { MoneyComponent } from './money/money.component';
import { FriendsComponent } from './friends/friends.component';
import { TravelConditionsComponent } from './travel-conditions/travel-conditions.component';
import { TrafficJamComponent } from './traffic-jam/traffic-jam.component';
import { AppsComponent } from './apps/apps.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

import { ParallaxScrollModule } from 'ng2-parallaxscroll';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EconomyComponent,
    WelcomeComponent,
    MoneyComponent,
    FriendsComponent,
    TravelConditionsComponent,
    TrafficJamComponent,
    AppsComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonModule,
    MatRippleModule,
    MatTabsModule,
    ParallaxScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
