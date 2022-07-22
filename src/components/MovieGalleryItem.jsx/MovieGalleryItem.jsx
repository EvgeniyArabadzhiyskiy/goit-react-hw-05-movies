import { Box } from 'components/Box';
import { Link, useLocation } from 'react-router-dom';
import Item from './MovieGalleryItem.styled';

const MovieGalleryItem = ({ id, title, poster }) => {
  const location = useLocation();
  return (
    <Item>
      <Link to={`/movie/${id}`} state={{ from: location }}>
        <Box height={550} overflow="hidden">
          {poster ? (
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
          ) : (
            <img
              src="https://image.tmdb.org/t/p/w500/eBj90pocOdfR4IQge0XvaGBPnUF.jpg"
              alt={title}
            />
          )}
        </Box>

        <h3>{title}</h3>
      </Link>
    </Item>
  );
};

export default MovieGalleryItem;
