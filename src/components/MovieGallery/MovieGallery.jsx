import API from 'service/API.tmDB';
import { useState, useEffect } from 'react';
import { StyledGallery } from './MovieGallery.styled';
import MovieGalleryItem from 'components/MovieGalleryItem.jsx/MovieGalleryItem';
import Loader from 'components/Loader/Loader';
import PaginatedItems from 'components/PaginatedItems/PaginatedItems';

const MovieGallery = () => {
  const [movieOptions, setMovieOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const data = await API.fetchTrendingMovies(page);

        setMovieOptions(data.results);
        setTotalPage(data.total_pages);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [page]);

  const getPage = page => {
    console.log('getPage ~ page', page);
    setPage(page);
  };

  return (
    <>
      {isLoading && <Loader />}
      {movieOptions.length > 0 && (
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
      )}
      <PaginatedItems totalPage={totalPage} getPage={getPage} />
    </>
  );
};

export default MovieGallery;
