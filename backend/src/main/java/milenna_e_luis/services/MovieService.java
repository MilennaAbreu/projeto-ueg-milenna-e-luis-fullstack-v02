package milenna_e_luis.services;

import milenna_e_luis.dtos.MovieCreateDTO;
import milenna_e_luis.dtos.MovieUpdateDTO;
import milenna_e_luis.models.Movie;

import java.util.List;

public interface MovieService {

    Movie createMovie(MovieCreateDTO movieCreateDTO);

    List<Movie> getAllMovies();

    Movie getMovieById(Long id);

    Movie updateMovie(Long id, MovieUpdateDTO movieUpdateDTO);

    void deleteMovie(Long id);
}
