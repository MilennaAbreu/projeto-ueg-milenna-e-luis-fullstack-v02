package milenna_e_luis.services.impl;

import milenna_e_luis.dtos.MovieCreateDTO;
import milenna_e_luis.dtos.MovieUpdateDTO;
import milenna_e_luis.models.Movie;
import milenna_e_luis.repositories.MovieRepository;
import milenna_e_luis.services.MovieService;
import milenna_e_luis.services.exceptions.MovieNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImplementation implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public Movie createMovie(MovieCreateDTO movieCreateDTO) {
        Movie movie = new Movie();
        movie.setTitle(movieCreateDTO.getTitle());
        movie.setDirector(movieCreateDTO.getDirector());
        movie.setReleaseDate(movieCreateDTO.getReleaseDate());
        movie.setGenre(movieCreateDTO.getGenre());
        movie.setAvailable(movieCreateDTO.getAvailable());
        movie.setLanguage(movieCreateDTO.getLanguage());
        movie.setWatched(movieCreateDTO.getWatched());
        return movieRepository.save(movie);
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public Movie getMovieById(Long id) {
        return movieRepository.findById(id)
                .orElseThrow(() -> new MovieNotFoundException("Filme não encontrado com o ID: " + id));
    }

    @Override
    public Movie updateMovie(Long id, MovieUpdateDTO movieUpdateDTO) {
        Movie movie = getMovieById(id);

        movie.setTitle(movieUpdateDTO.getTitle());
        movie.setDirector(movieUpdateDTO.getDirector());
        movie.setReleaseDate(movieUpdateDTO.getReleaseDate());
        movie.setGenre(movieUpdateDTO.getGenre());
        movie.setAvailable(movieUpdateDTO.getAvailable());
        movie.setLanguage(movieUpdateDTO.getLanguage());
        movie.setWatched(movieUpdateDTO.getWatched());

        return movieRepository.save(movie);
    }

    @Override
    public void deleteMovie(Long id) {
        movieRepository.deleteById(id);
    }
}
