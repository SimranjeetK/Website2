import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortraitComponent } from './portrait/portrait.component';
import { AppRoutingModule } from './app-routing.module';
import { LandscapeComponent } from './landscape/landscape.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { EventsComponent } from './events/events.component';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: 'portrait',
    component: PortraitComponent,
    data: {title: 'Portrait'}
  },
  {path: 'landscape',
    component: LandscapeComponent,
    data: {title: 'Landscape'}
  },
  {path: 'wildlife',
    component: WildlifeComponent,
    data: {title: 'Wildlife'}
  },
  {path: 'events',
    component: EventsComponent,
    data: {title: 'Events'}
  },
  {
    path: '',
    component: HomeComponent,
  }

]
@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomeComponent,
    NavbarComponent,
    PortraitComponent,
    LandscapeComponent,
    WildlifeComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule.forRoot(),
    RouterModule.forRoot(
      appRoutes

    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
