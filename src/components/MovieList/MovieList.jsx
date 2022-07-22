import Loader from 'components/Loader/Loader';
import { StyledGallery } from 'components/MovieGallery/MovieGallery.styled';
import MovieGalleryItem from 'components/MovieGalleryItem.jsx/MovieGalleryItem';
import SearchMovieBox from 'components/SearchMovieBox/SearchMovieBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from 'service/API.tmDB';

const MovieList = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searhMovieParams, setSearchMovieParams] = useSearchParams();
  const searchMovie = searhMovieParams.get('search') ?? '';

  useEffect(() => {
    if (searchMovie === '') {
      return;
    }

    async function getSearchMovies() {
      try {
        setIsLoading(true);
        const movies = await API.fetchSearchMovie(searchMovie);
        setFoundMovies(movies);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getSearchMovies();
  }, [searchMovie]);

  const onSubmit = search => {
    setSearchMovieParams(search);
  };

  return (
    <div>
      <SearchMovieBox onSearhSubmit={onSubmit} />
      {isLoading && <Loader />}
      <StyledGallery>
        {foundMovies.map(({ id, original_title, poster_path }) => {
          return (
            <MovieGalleryItem
              key={id}
              title={original_title}
              id={id}
              poster={poster_path}
            />
          );
        })}
      </StyledGallery>
    </div>
  );
};

export default MovieList;
