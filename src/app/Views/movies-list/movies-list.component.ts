import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieInterface } from 'src/app/Interfaces/MovieInterface';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  moviesList: MovieInterface[] = [];
  animated!: boolean;
  animationTime() {
    if (this.animated) return 2.5;
    return 0.5;
  }

  ngOnInit(): void {
    this.moviesList = this.moviesService.movies;
    this.animated = Boolean(
      this.activatedRoute.snapshot.queryParamMap.get('prev')
    );
  }

  onSearch = (searchValue: string): void => {
    if (searchValue.length > 1)
      this.moviesList = this.moviesService.movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchValue.trim().toLowerCase())
      );
    else this.moviesList = this.moviesService.movies;
  };
}
