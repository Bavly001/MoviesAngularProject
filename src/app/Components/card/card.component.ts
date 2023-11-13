import { NavigateService } from 'src/app/Services/navigate.service';
import { Component, Input } from '@angular/core';
import { MovieInterface } from 'src/app/Interfaces/MovieInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(private navigateService: NavigateService) {}

  @Input() movie: MovieInterface = {
    Title: '',
    Year: 0,
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    Ratings: [],
    Metascore: 0,
    imdbRating: 0,
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Response: '',
  };

  movieRouteNavigator(movieId: string, card: HTMLDivElement) {
    card.classList.add('scale-up');
    setTimeout(
      () => this.navigateService.navigateTo('/movies/movie/' + movieId),
      1000
    );
  }
}
