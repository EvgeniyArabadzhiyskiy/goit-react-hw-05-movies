import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'service/API.tmDB';

const ReviwersList = () => {
  const { movieId } = useParams();
  const [reviwes, setReviwes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchReviwes() {
      try {
        setIsLoading(true);
        const results = await API.fetchMovieReviwes(movieId);
        setReviwes(results);
      } catch (error) {
      }
      finally {setIsLoading(false);}
    }
    fetchReviwes();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {reviwes.length > 0 && (
        <ul>
          {reviwes.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ReviwersList;
