import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../../api/API';
import Loader from '../Loader/Loader';

const Cast = () => {
  const [castInfo, setCastInfo] = useState({});
  const [status, setStatus] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    fetchCastById(movieId).then(({ data }) => {
      setCastInfo(data);
      setStatus('resolved');
    });
  }, [movieId]);

  if (status === 'error') {
    return <>Something was wrong</>;
  }

  const { cast } = castInfo;

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <div>
          <ul>
            {cast.map(({ id, name, known_for_department }) => {
              return (
                <li key={id}>
                  <img src="" alt={name} />
                  <p>{name}</p>
                  <p>{known_for_department}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cast;
