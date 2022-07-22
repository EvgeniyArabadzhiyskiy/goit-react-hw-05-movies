import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'service/API.tmDB';
import CardMovieInfo from 'components/CardMovieInfo/CardMovieInfo';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMoviesByid() {
      try {
        setIsLoading(true);

        const movieData = await API.fetchMovieById(movieId);
        setMovieDetails(movieData);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesByid();
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  return (
    <main>
      {isLoading && <Loader />}
      <CardMovieInfo movieDetails={movieDetails} />
      {/* {movieDetails && <CardMovieInfo movieDetails={movieDetails} />} */}
    </main>
  );
};

export default MovieDetails;
