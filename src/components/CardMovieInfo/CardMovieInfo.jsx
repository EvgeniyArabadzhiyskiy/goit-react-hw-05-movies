import BackLink from 'components/BackLink/BackLink';
import { Box } from 'components/Box';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { StyledLink } from './CardMovieInfo.styled';

const CardMovieInfo = ({
  movieDetails: {
    original_title,
    overview,
    release_date,
    backdrop_path,
    genres,
  },
}) => {
  const location = useLocation();
  const FROM = location.state?.from;
  const INNER_FROM = location.state?.from.state?.from;

  /*
  Не возвращал BackLinc  из второго уровня вложенной сcылки
  Cast И  Reviwers на страницу с поиском фильмов когда было так:

  const backLinkHref = FROM ?? '/'; 

  */
                                           
  const backLinkHref = INNER_FROM ?? FROM;

  const releaseDate = release_date.slice(0, 4);
  const getMovieGenres = genres.map(({ name }) => name).join(' ');

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <div>
          <h1>
            {original_title}({releaseDate})
          </h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={original_title}
          />
        </div>

        <Box width={500}>
          <h2>Overwiev</h2>
          <p> {overview}</p>

          <h3>Genres</h3>
          <p>{getMovieGenres}</p>

          <h2>Additional information</h2>

          <StyledLink to="cast" state={{ from: location }}>
            Cast
          </StyledLink>
          <StyledLink to="reviwers" state={{ from: location }}>
            Reviwers
          </StyledLink>
        </Box>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CardMovieInfo;
