import { Injectable } from '@angular/core';
import {Film} from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  films!: Film[];

  constructor() {
    this.loadFilms();
  }

  private loadFilms() {
    this.films = [
      {id: 1, name: 'Interestelar', genre: 'Ficção científica', movieTime: '2hrs', watched: false},
      {id: 2, name: 'O Poderoso Chefão', genre: 'Crime', movieTime: '1.5hrs', watched: true},
      {id: 3, name: 'A Origem', genre: 'Ação/Suspense', movieTime: '1hrs', watched: false,},
      {id: 4, name: 'Planeta dos Macacos', genre: 'Ação', movieTime: '2hrs', watched: false},
    ];
  }

  getFilms() {
     return this.films;
  }

  getFilm(id: number) {
    return this.films.find(film => film.id === id);
  }

  addFilm(film: Film) {
    let length = this.films.length ?? 0;
    let film1 = this.films[length - 1];
    film.id = (film1.id ?? 0) + 1;
    film.watched = false;
    this.films.push(film);
  }

  removeFilm(id: number) {
      this.films = this.films.filter(film => film.id !== id);
  }

  updateFilm(film: Film) {
    const filmDataBase = this.getFilm(film.id??0)
    filmDataBase!.name = film.name
    filmDataBase!.genre = film.genre
    filmDataBase!.movieTime = film.movieTime
  }
}
