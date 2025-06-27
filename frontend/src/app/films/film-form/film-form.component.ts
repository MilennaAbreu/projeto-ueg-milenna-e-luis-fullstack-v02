import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {FilmsService} from '../shared/films.service';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatCheckbox} from '@angular/material/checkbox';
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
    FormsModule,
    MatCheckbox
  ],
  templateUrl: './film-form.component.html',
  styleUrl: './film-form.component.scss'
})
export class FilmFormComponent {

  film!: Film;

  constructor(private filmService: FilmsService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
    this.initFilm();
    this.loadFilm();
  }

  initFilm(){
    this.film = {
      title: '',
      director: '',
      releaseDate: '',
      genre: '',
      available: true,
      language: '',
      watched: false
    };
  }


  validate(filmValue: Film) {
    if (!filmValue.title) {
      alert('E impossivel que um filme nao possua um nome')
      return false;
    }
    return true;
  }


  saveFilm() {
    if (!this.validate(this.film)) { return; }

    if (this.film.id) {
      this.filmService.updateFilm(this.film).subscribe(() => this.navigateToList());
    } else {
      this.filmService.addFilm(this.film).subscribe(() => {
        this.initFilm();
        this.navigateToList();
      });
    }
  }

  refreshField(nomeFilme: string) {
    this.film.title = nomeFilme;
  }

  private loadFilm() {
    const edit = this.activatedRoute.snapshot.paramMap.get('id')
    if (edit) {
      this.filmService.getFilm(parseInt(edit)).subscribe(film => this.film = film);
    }

  }

  navigateToList() {
    this.router.navigate(['/list'])
  }
}
