import { HomeComponent } from './Views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './Views/movies-list/movies-list.component';
import { AboutUsComponent } from './Views/about-us/about-us.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';
import { MovieComponent } from './Views/movie/movie.component';
import { ErrorPageComponent } from './Views/error-page/error-page.component';
import { RouteService } from './Services/route.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'movies',
    component: MoviesListComponent,
    canActivate: [RouteService],
  },
  {
    path: 'movies',
    canActivate: [RouteService],
    children: [{ path: 'movie/:id', component: MovieComponent }],
  },
  { path: 'about-us', component: AboutUsComponent, canActivate:[RouteService]},
  { path: 'contact-us', component: ContactUsComponent, canActivate:[RouteService] },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
