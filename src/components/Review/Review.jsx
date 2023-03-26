import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from '../../api/API';
import { Notification } from '../Notification/Notification';
import Loader from '../Loader/Loader';

const Review = () => {
  const [reviewInfo, setreviewInfo] = useState([]);
  const [status, setStatus] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    fetchMovieReview(movieId).then(({ data }) => {
      setreviewInfo(data.results);
      setStatus('resolved');
    });
  }, [movieId]);

  if (status === 'error') {
    return <>Something was wrong</>;
  }

  return (
    // <>
    //   {status === 'pending' && <Loader />}
    //   {status === 'resolved' && (
    //     <div>
    //       <ul>
    //         {reviewInfo.map(({ id, author, content }) => {
    //           return (
    //             <li key={id}>
    //               <p> Author: {author}</p>
    //               <p>{content}</p>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   )}
    // </>

    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && reviewInfo.length > 0 ? (
        <div>
          <ul>
            {reviewInfo.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <p> Author{author}</p>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <Notification />
      )}
    </>
  );
};

export default Review;
