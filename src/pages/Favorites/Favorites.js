import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from 'redux/operations';
import {
  selectFavoriteCars,
  selectFiltredFavoriteCars,
  selectIsFiltred,
} from 'redux/selectors';
import { CarsList } from 'components/CarList';
import { Search } from 'components/Search';
import { NoFavorites } from 'components/FavoritesNone';
import { NoFiltred } from 'components/NotFiltred';

const Favorites = () => {
  const dispatch = useDispatch();
  const isFiltred = useSelector(selectIsFiltred);
  const favorites = useSelector(selectFavoriteCars);
  const filtredFavorites = useSelector(selectFiltredFavoriteCars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <main>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <>
          <Search />
          <CarsList cars={isFiltred ? filtredFavorites : favorites} />
          {isFiltred && filtredFavorites?.length === 0 && <NoFiltred />}
        </>
      )}
    </main>
  );
};

export default Favorites;
