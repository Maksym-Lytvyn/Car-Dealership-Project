import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "redux/selectors";
import { addFavorite, removeFavorite } from "redux/favoritesSlice";
import { Modal } from "components/Modal";
import { ReactComponent as FavoriteIcon } from "../../images/svgs/favorite.svg";
import { ReactComponent as FavoriteActiveIcon } from "../../images/svgs/favorite-active.svg";
import {
  Button,
  DetailsItem,
  iconStyles,
} from "./CarsListItem.styled";

const DEFAULT_URL = "../../images/backgrounds/no-image.jpg";

export const CarsListItem = ({
  id,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  accessories,
  mileage,
  img,
}) => {
  const favorites = useSelector(selectFavorites);
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => setIsShowModal((prev) => !prev);

  const handleAddFavorites = (favId) => {
    dispatch(addFavorite(favId));
  };

  const handleRemoveFavorites = (favId) => {
    dispatch(removeFavorite(favId));
  };

  return (
    <>
      <li style={{width: '100%', flexBasis: 'calc((100% - 3 * 29px) / 4)', position: 'relative',   display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{paddingBottom: 28}}>
          {favorites.includes(id) ? (
            <FavoriteActiveIcon
              width="18"
              height="18"
              style={iconStyles}
              onClick={() => handleRemoveFavorites(id)}
            />
          ) : (
            <FavoriteIcon
              width="18"
              height="18"
              style={iconStyles}
              onClick={() => handleAddFavorites(id)}
            />
          )}
          <img
            src={img ? img : DEFAULT_URL}
            style={{width: '100%', height: 268, display: 'block', objectFit: 'cover', borderRadius: 14}}
            alt={make}
            loading="lazy"
            width="274"
          />
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, paddingBottom: 8}}>
            <h2 style={{fontWeight: 500, fontSize: 14, color: '#121417'}}>
              {make} <span style={{color: '#3470FF'}}>{model}, </span>
              {year}
            </h2>
            <p>{rentalPrice}</p>
          </div>
          <ul style={{display: 'flex', flexWrap: 'wrap'}}>
            <DetailsItem>{address.split(",")[1]}</DetailsItem>
            <DetailsItem>{address.split(",")[2]}</DetailsItem>
            <DetailsItem>{rentalCompany}</DetailsItem>
          </ul>
          <ul style={{display: 'flex', flexWrap: 'wrap'}}>
            <DetailsItem>{type}</DetailsItem>
            <DetailsItem>{model}</DetailsItem>
            <DetailsItem>{mileage}</DetailsItem>
            <DetailsItem>{accessories[0]}</DetailsItem>
          </ul>
        </div>
        <Button type="button" onClick={toggleModal}>
          Докладніше
        </Button>
      </li>
      {isShowModal && (
        <Modal onClose={toggleModal} carId={id}>
          <img alt={make} src={img} />
        </Modal>
      )}
    </>
  );
};
