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
  {path: '',
    redirectTo: '/',
    pathMatch: 'full'
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
