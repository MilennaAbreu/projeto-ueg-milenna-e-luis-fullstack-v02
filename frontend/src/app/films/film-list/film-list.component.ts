import { Component } from '@angular/core';
import {Film} from '../shared/film';
import {MatCard, MatCardTitle} from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatCheckbox} from '@angular/material/checkbox';
import {FilmsService} from '../shared/films.service';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-film-list',
  imports: [
    MatCard,
    MatCardTitle,
    MatHeaderCell,
    MatCell,
    MatTable,
    MatCheckbox,
    MatHeaderRow,
    MatRow,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatIcon,
    MatFabButton,
    MatTooltip,
    RouterLink,
    FormsModule,
    MatIconButton
  ],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})

export class FilmListComponent {
  dataSource = new MatTableDataSource<Film>();

  constructor(private filmService: FilmsService) {
    this.updateTable();
  }

  displayedColumns: string[] = ['descricao','genero','idioma','status','check','edit','delete']


  toggleWatched(film: Film): void {
    film.watched = !film.watched;
    this.filmService.updateFilm(film).subscribe(() => this.updateTable());
  }

  getStatusLabel(film: Film): string {
    return film.watched ? 'Assistido' : 'Não assistido';
  }

  delete(film: Film) {
    this.filmService.removeFilm(film.id ?? 0).subscribe(() => this.updateTable());
  }

  updateTable() {
    this.filmService.getFilms().subscribe(films => this.dataSource.data = films);
  }
}

