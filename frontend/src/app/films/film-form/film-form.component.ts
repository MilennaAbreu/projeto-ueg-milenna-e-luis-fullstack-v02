import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {FilmsService} from '../shared/films.service';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {Film} from '../shared/film';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-film-form',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatFormField,
    RouterLink,
    MatLabel,
    MatInput,
    FormsModule
  ],
  templateUrl: './film-form.component.html',
  styleUrl: './film-form.component.scss'
})
export class FilmFormComponent {

  film!: Film;
  filmValue!: Film;

  constructor(private filmService: FilmsService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
    this.initFilm()
    this.editFilm();
  }

  initFilm(){
    this.film = {id: 0, name: '', genre: '', movieTime:'', watched: false}
    this.filmValue = {id: 0, name: '', genre: '', movieTime:'', watched: false}
  }


  validate(filmValue: Film) {
    if (!filmValue.name) {
      alert('E impossivel que um filme nao possua um nome')
      return false;
    }
    return true;
  }


  saveFilm() {
    let saved = this.validate(this.filmValue);
    if(!saved){return;}

    let isEdit = this.film.id
    if (isEdit) {
      saved = this.updateFilm(this.filmValue);

    }else{
      saved = this.addFilm(this.filmValue);
    }

    if(saved){
      this.navigateToList()
    }

  }

   updateFilm(filmToUpdate: Film): boolean {
      this.filmService.updateFilm(filmToUpdate)
      return true;
  }

  addFilm(filmToAdd: Film): boolean {
    this.filmService.addFilm(filmToAdd);
    this.initFilm();
    return true;
  }

  refreshField(nomeFilme: string) {
    this.filmValue.name = nomeFilme
  }

  private editFilm() {
    const edit = this.activatedRoute.snapshot.paramMap.get('id')
    if (edit) {
      let film = this.filmService.getFilm(parseInt(edit ?? 0))
      if (film) {
        this.film = film;
        this.filmValue.id = film.id ?? 0;
        this.filmValue.name = film.name;
        this.filmValue.genre = film.genre;
        this.filmValue.movieTime = film.movieTime;
      }
    }

  }

  navigateToList() {
    this.router.navigate(['/list'])
  }
}
