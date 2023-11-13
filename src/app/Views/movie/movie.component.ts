import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInterface } from 'src/app/Interfaces/MovieInterface';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  movie: MovieInterface | undefined = {
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

  movieId: string = '';
  

  ngOnInit(): void {
    this.movieId = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.movie = this.moviesService.getMovie(this.movieId);
  }
}
