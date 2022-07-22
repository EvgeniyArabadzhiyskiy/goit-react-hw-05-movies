import BackLink from 'components/BackLink/BackLink';
import { Box } from 'components/Box';
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

  const backLink = location.state?.from ?? '/';

  const releaseDate = release_date.slice(0, 4);
  const getMovieGenres = genres.map(({ name }) => name).join(' ');

  return (
    <>
      <BackLink to={backLink}>Back</BackLink>
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
      <Outlet />
    </>
  );
};

export default CardMovieInfo;
