import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { getCarsByPage } from 'redux/operations';
import { resetFilter } from 'redux/filtersSlice';
import {
  selectIsLoading,
  selectError,
  selectCars,
  selectFiltredCars,
  selectIsFiltred,
} from 'redux/selectors';
import { CarsList } from 'components/CarList';
import { Search } from 'components/Search';
import { Spinner } from 'components/Spinner';
import { NoFiltred } from 'components/NotFiltred';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [isBtnShown, setIsBtnShown] = useState(true);
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const isFiltred = useSelector(selectIsFiltred);
  const filtredCars = useSelector(selectFiltredCars);
  const dispatch = useDispatch();

  const arrayForRender = isFiltred ? filtredCars : cars;

  useEffect(() => {
    dispatch(getCarsByPage(page));
    dispatch(resetFilter());
    setIsBtnShown(true);
  }, [dispatch, page]);

  useEffect(() => {
    if (arrayForRender.length === 36) {
      setIsBtnShown(false);
    }
  }, [arrayForRender.length]);

  useEffect(() => {
    const height = 426;
    if (cars.length > 8) {
      window.scrollBy({
        top: height * 1.5,
        behavior: 'smooth',
      });
    }
  }, [cars]);

  const handleLoadMoreClick = () => {
    setPage(page => page + 1);
  };

  return (
    <main>
      {error &&
        Notiflix.Notify.failure(
          'Схоже, виникла помилка. Спробуйте інший запит'
        )}
      {loading && !error && <Spinner />}
      <Search />
      <CarsList cars={isFiltred ? filtredCars : cars} />
      {isFiltred && filtredCars?.length === 0 && <NoFiltred />}
      {isBtnShown && !loading && !isFiltred && (
        <button
          style={{
            display: 'block',
            color: '#3470FF',
            fontSize: 16,
            fontWeight: 500,
            textDecoration: 'underline',
            marginRight: 'auto',
            marginLeft: 'auto',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            marginBottom: 150,
          }}
          onClick={handleLoadMoreClick}
        >
          Завантажити ще
        </button>
      )}
    </main>
  );
};

export default Catalog;
