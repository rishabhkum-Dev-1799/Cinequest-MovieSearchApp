import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

//custom Imports
import { useActions } from 'src/hooks/useActions';

import { checkStringStartsWith } from 'src/helper/manipulationFunc';
import MovieDetails from 'src/components/Movie/MovieDetails';
import { btnLabels } from 'src/lang';
import SearchImageError from 'src/components/common/Error/SearchImageError';
import { singleFilmActions } from 'src/store/reducers/singleFilmSlice';
import PrimaryButton from 'src/components/ui/Button/PrimaryButton';
import DataFetchLoader from 'src/components/common/Loaders/DataFetchLoader';

const MovieDetailsPage = () => {
  const { getFilmById } = useActions();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { film, error, loading } = useSelector((state) => state.singleFilm);
  const navigate = useNavigate();

  /*Handler functions*/
  const onBackHandler = useCallback(() => {
    console.log('onBackHandler');
    navigate('/');
  }, [navigate]);

  /**Use Effect for Fetching the Data on Page Load */
  useEffect(() => {
    if (!checkStringStartsWith(id, 'tt')) {
      dispatch(singleFilmActions.getFilmError('Incorrect Movie ID..'));
      return;
    }
    getFilmById(id);
  }, [id]);

  if(loading){
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-full flex items-center justify-center'>
          <DataFetchLoader />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className='w-full h-full flex flex-col gap-2 items-center justify-center'>
        <div className='w-full flex items-center justify-center'>
          <SearchImageError errorMessage={error} />
        </div>
        <PrimaryButton
          onClick={onBackHandler}
          label={btnLabels.errorBack}
        />
      </div>
    );
  }
  return (
    <div className='w-full h-full'>
      <div className='max-container w-full h-full overflow-y-scroll p-4 flex flex-col gap-4'>
        {film && (
          <MovieDetails
            film={film}
            onBack={onBackHandler}
          />
        )}
      </div>
    </div>
  );
};
MovieDetailsPage.propTypes = {};
export default MovieDetailsPage;
