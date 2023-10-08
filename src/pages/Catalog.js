// import { Link } from 'react-router-dom';
// import Card from "components/Card";
// import Popup from "components/Popup";
import { setFavorite, setIsFavorite } from 'redux/favoritesSlice';
import { selectIsFavorite } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import isTrulyFavorite from '../assets/isFavorite.png';
import notFavorite from '../assets/notFavorite.png';

const Catalog = () => {
  const dispatch = useDispatch();
  const [cars, setCars] = useState(null);
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const isFavorite = useSelector(selectIsFavorite);

  const handleBrandSelectChange = event => {
    const selectedBrand = event.target.value;
    setBrand(selectedBrand);
    console.log(selectedBrand);
  };

  const handlePriceSelectChange = event => {
    const selectedPrice = event.target.value;
    setPrice(selectedPrice);
    console.log(selectedPrice);
  };

  const handleSelectFromChange = event => {
    const selectedFrom = event.target.value;
    const parsedFrom = parseInt(selectedFrom);
    setFrom(parsedFrom);
    console.log(selectedFrom);
  };

  const handleSelectToChange = event => {
    const selectedTo = event.target.value;
    const parsedTo = parseInt(selectedTo);
    setTo(parsedTo);
    console.log(selectedTo);
  };
  const handleSearchResults = event => {
    const fetchAdverts = async () => {
      event.preventDefault();
      try {
        const response = await axios.get(
          `https://6521a808a4199548356d7459.mockapi.io/adverts/advert/`
        );
        console.log(response.data);
        const filteredApiResponse = response.data.filter(
          result =>
            result.make === brand &&
            result.rentalPrice === price &&
            result.mileage > from &&
            result.mileage < to
        );
        console.log(filteredApiResponse);
        setCars(filteredApiResponse);
      } catch (error) {
        Notiflix.Notify.failure(
          'Нажаль виникла помилка. Спробуйте змінити запит'
        );
      }
    };
    fetchAdverts();
  };

  const addToFavorites = () => {
    dispatch(setFavorite(cars));
    dispatch(setIsFavorite(true));
  };

  // useEffect(() => {
  //   const fetchAdverts = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://6521a808a4199548356d7459.mockapi.io/adverts/advert/`
  //       );
  //       console.log(response.data);
  //       const filteredApiResponse = response.data.filter(result => result.make === brand && result.rentalPrice === price && result.mileage > from && result.mileage < to);
  //       console.log(filteredApiResponse);
  //       setCars(filteredApiResponse);
  //     } catch (error) {
  //       Notiflix.Notify.failure(
  //         'Нажаль виникла помилка. Спробуйте змінити запит'
  //       );
  //     }
  //   };
  //   fetchAdverts();
  // }, [brand, price, from, to]);

  return (
    <div>
      <div>
        <form style={{ display: 'flex' }}>
          <div>
            <label>Car brand</label>
            <select value={brand} onChange={handleBrandSelectChange}>
              <option value={undefined}>Enter the text</option>
              <option value="Subaru">Subaru</option>
              <option value="HUMMER">Hummer</option>
              <option value="Mazda">Mazda</option>
              <option value="Buick">Buick</option>
              <option value="Volvo">Volvo</option>
              <option value="Mitsubishi">Mitsubishi</option>
              <option value="Nissan">Nissan</option>
              <option value="Lincoln">Lincoln</option>
              <option value="GMC">GMC</option>
              <option value="Hyundai">Hyundai</option>
              <option value="MINI">Mini</option>
              <option value="Bentley">Bentley</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Aston Martin">Aston Martin</option>
              <option value="Pontiac">Pontiac</option>
              <option value="Lamborghini">Lamborghini</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Kia">Kia</option>
            </select>
          </div>

          <div>
            <label>Price /1 hour</label>
            <select value={price} onChange={handlePriceSelectChange}>
              <option value={undefined}>To $</option>
              <option value="$20">20</option>
              <option value="$35">35</option>
              <option value="$40">40</option>
              <option value="$45">45</option>
              <option value="$50">50</option>
              <option value="$55">55</option>
              <option value="$60">60</option>
              <option value="$75">75</option>
              <option value="$100">100</option>
              <option value="$200">200</option>
              <option value="$250">250</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block' }}>Car mileage / km</label>
            <select value={from} onChange={handleSelectFromChange}>
              <option value={undefined}>From</option>
              <option value="1000">1000</option>
              <option value="3000">3000</option>
              <option value="5000">5000</option>
            </select>

            <select value={to} onChange={handleSelectToChange}>
              <option value={undefined}>To</option>
              <option value="6000">6000</option>
              <option value="12000">12000</option>
              <option value="20000">20000</option>
            </select>
          </div>

          <button type="button" onClick={handleSearchResults}>
            Search
          </button>
          {/* <button onClick={addToFavorites}>Favorite</button> */}
        </form>
      </div>
      {cars ? (
        cars.map((car, index) => (
          <div key={index}>
            <div style={{ marginTop: 40 }}>
              <img
                src={car.img}
                alt={car.make}
                style={{ width: 274, height: 268, position: 'relative' }}
              />

              <button onClick={addToFavorites}>
                {isFavorite ? (
                  <img
                    src={isTrulyFavorite}
                    alt="coco"
                    style={{ position: 'absolute', top: 85, left: 240 }}
                  />
                ) : (
                  <img
                    src={notFavorite}
                    alt="coco"
                    style={{ position: 'absolute', top: 85, left: 240 }}
                  />
                )}
              </button>
              <h2>
                {car.make} {car.model} {car.year} {car.rentalPrice}
              </h2>
              <p>{car.address}</p>
              <p>{car.rentalCompany}</p>
              <p>{car.type}</p>
              <p>{car.model}</p>
              <p>{car.id}</p>
              <p>{car.functionalities[0]}</p>
              <button>Learn more</button>
            </div>
          </div>
        ))
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default Catalog;
