import { Routes } from '@angular/router';
import {FilmFormComponent} from './films/film-form/film-form.component';
import {FilmListComponent} from './films/film-list/film-list.component';

export const routes: Routes = [
  //Lista de filmes
  {'path': 'list', component: FilmListComponent},
  //Formulario de adicao
  {'path': 'form', component: FilmFormComponent},
  //Formulario de edição, é o mesmo que ao de adição mas preenchendo os campos via parametros
  {'path': 'form/:id', component: FilmFormComponent},
];
