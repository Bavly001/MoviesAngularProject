import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesPopUpComponent } from './Components/images-pop-up/images-pop-up.component';
import { HomeComponent } from './Views/home/home.component';
import { MoviesListComponent } from './Views/movies-list/movies-list.component';
import { MovieComponent } from './Views/movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './Components/logo/logo.component';
import { CardComponent } from './Components/card/card.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './Views/about-us/about-us.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';
import { MovieNotFoundComponent } from './Components/movie-not-found/movie-not-found.component';
import { ErrorPageComponent } from './Views/error-page/error-page.component';
import { RouteService } from './Services/route.service';
import { LogoutButtonComponent } from './Components/logout-button/logout-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesPopUpComponent,
    HomeComponent,
    MoviesListComponent,
    MovieComponent,
    LogoComponent,
    CardComponent,
    SearchBarComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    MovieNotFoundComponent,
    ErrorPageComponent,
    LogoutButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [RouteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
