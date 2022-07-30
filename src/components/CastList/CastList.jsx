import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from 'service/API.tmDB';
import Loader from 'components/Loader/Loader';
import { StyledCastList } from './CastList.styled';

const CastList = () => {
  const { movieId } = useParams();

  const [allCastList, setAllCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCast() {
      try {
        setIsLoading(true);
        const castList = await API.fetchCastCredits(movieId);
        setAllCastList(castList);
      } catch (error) {
      } 
      finally {setIsLoading(false);}
    }
    fetchCast();
  }, [movieId]);

  const createCastList = () => {
    return allCastList.filter(actor => actor.profile_path).splice(0, 20);
  };

  return (
    <div>
      {isLoading && <Loader />}
      {allCastList.length > 0 && (
        <StyledCastList>
          {createCastList().map(({ id, profile_path, name }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width={350}
                />
                <h3>{name}</h3>
              </li>
            );
          })}
        </StyledCastList>
      )}
    </div>
  );
};

export default CastList;
