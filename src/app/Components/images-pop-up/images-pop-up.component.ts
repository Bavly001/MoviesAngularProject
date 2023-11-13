import { Component, OnInit } from '@angular/core';
import { MovieInterface } from 'src/app/Interfaces/MovieInterface';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-images-pop-up',
  templateUrl: './images-pop-up.component.html',
  styleUrls: ['./images-pop-up.component.css'],
})
export class ImagesPopUpComponent implements OnInit {
  constructor(private movies: MoviesService) {}
  moviesList: MovieInterface[] = [];
  ngOnInit(): void {
    this.moviesList = this.movies.movies;
  }
}
