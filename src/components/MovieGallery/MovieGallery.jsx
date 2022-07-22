import API from 'service/API.tmDB';
import { useState, useEffect } from 'react';
import {StyledGallery} from './MovieGallery.styled';
import MovieGalleryItem from 'components/MovieGalleryItem.jsx/MovieGalleryItem';
import Loader from 'components/Loader/Loader';

const MovieGallery = () => {
  const [movieOptions, setMovieOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies(params) {
      try {
        setIsLoading(true);
        const results = await API.fetchTrendingMovies();
        setMovieOptions(results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <StyledGallery>
        {movieOptions.map(({ id, original_title, poster_path }) => {
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
    </>
  );
};

export default MovieGallery;
