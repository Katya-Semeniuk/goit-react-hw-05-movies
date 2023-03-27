import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../../api/API';
import Loader from '../Loader/Loader';
import { CastList, Kind } from './Cast.styled';

const Cast = () => {
  const [castInfo, setCastInfo] = useState({});
  const [status, setStatus] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    fetchCastById(movieId).then(({ data }) => {
      console.log(data);
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
          <CastList>
            {cast.map(({ id, name, character, profile_path }) => {
              return (
                <li key={id}>
                  <img src={profile_path} alt="" />
                  <div>{name}</div>
                  <Kind>{character}</Kind>
                </li>
              );
            })}
          </CastList>
        </div>
      )}
    </>
  );
};

export default Cast;
